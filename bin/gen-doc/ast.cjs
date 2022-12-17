const { createBodyNode, createHeadingNode , createTableNode, createTextNode, createFragmentNode } = require('./node.cjs')
const fs = require('fs')
const $ = require('gogocode');

const { getModuleTitleLevel, isEntry, isModules, excludeFileSuffix } = require('./utils.cjs')

const path = require('path')
const srcPath = path.resolve(__dirname, '../../src')
const files = fs.readdirSync(srcPath)


function getCommentCode(path) {
    const code = fs.readFileSync(path, 'utf-8')
    const AST = $(code)
    const node = AST.find('/**$_$0 */')
    let str = node[0].nodePath.value.value.replace(/[*/ ]/g, '')
    return str + '\r\n'
}

function replaceStarAndBreakline (str) {
    return str.replace(/[*]|\s/g , '')
}


function getExposeFunctions(path , entry ) {
    const code = fs.readFileSync(path, 'utf-8')
    const AST = $(code)
    const node = AST.find(`export function $_$0 () {}`)
    const result = []
    for (i in node) {
        const methodName = node[i]?.nodePath?.value?.declaration.id.name
        if (!methodName) {
            continue
        }
        // 创建一个片段节点然后新增一个 methodName 的文本节点
        const wrapper = createFragmentNode()
        wrapper.children.push(new createHeadingNode( 4 , methodName))

        // 拿到注释块 
        const comments = node[i]?.nodePath?.value.comments
        for (c in comments) {
            if(entry && i === '0' && c === '0' && comments.length > 1) {
                continue
            }
            const commentValue = comments[c]?.value 
            const ld = commentValue.indexOf('@')
            const temp = ld > -1 ? commentValue.substring(0 , ld) : commentValue

            // 拿到方法注释文本
            const textNode = createTextNode(replaceStarAndBreakline(temp))
            wrapper.children.push(textNode)

            // 拿到参数注释文本
            const t = commentValue.match(/@\s*\w+\s+(.+?)\r\n/g) 

            if(!t) continue

            // 收集 params 
            const params = t.filter(i => i.indexOf('@param') === 0)
            const rows = params.map(i => {
                const name = replaceStarAndBreakline(i.split(' ')[1] || '')
                const text = replaceStarAndBreakline(i.split(' ')[2] || '')
                return [name , text]
            })
            const tableNode = createTableNode(['参数名字' , '参数描述'] , rows  )

            wrapper.children.push(tableNode)

            // 收集返回值
            const returns = t.filter(i => i.indexOf('@returns') === 0)
            const returnTextNode = createTextNode(`返回值： ${returns.map(i => {
                const text = i.substring(i.indexOf(' ') + 1)
                return `${text}`
            }).join(',')}`)
            wrapper.children.push(returnTextNode)
        }

        result.push(wrapper)
    }
    return result
}


const root = createBodyNode()


function deepReader(filename, level, parentPath, { parentFileName, node }) {
    const stat = fs.statSync(path.join(parentPath, filename))
    const hasModules = fs.readdirSync(path.join(parentPath)).includes('modules')

    if (stat.isDirectory()) {
        let newNode
        if (!isModules(filename)) {
            newNode = createHeadingNode(level, filename)
            node.children.push(newNode)
        }
        const children = fs.readdirSync(path.join(parentPath, filename))
        children.forEach(i => deepReader(i, level + 1, path.join(parentPath, filename), { parentFileName: filename, node: newNode || node }))
    } else if (stat.isFile()) {
        const isParentModules = isModules(parentFileName)
        if (isParentModules) {
            node.children.push(createHeadingNode(level - 1, excludeFileSuffix(filename)))
        }else {
            const newNode = createTextNode(getCommentCode(path.join(parentPath, filename)))
            node.children.push(newNode)
        }
        if (!hasModules) { // 核心代码在 index.ts 
            const nodes = getExposeFunctions(path.join(parentPath, filename) , isEntry(filename))
            node.children.push.apply(node.children, nodes)
        }
        return
    }
}


// 构建出节点
function build() {
    files.filter(i => i !== 'index.ts').forEach(i => {
        deepReader(i, 1, srcPath, { parentFileName: i, node: root })
    })

    return root
}

// 将节点渲染成 code 
function render(node) {

    let str = ''
    function _deepRender(node) {
        if (node.code) str += node.code() + '\r\n'

        if (node.children && node.children.length > 0) {
            node.children.forEach(_deepRender)
        }

    }


    _deepRender(node)
    return str
}

module.exports = {
    build,
    render,
    root
}