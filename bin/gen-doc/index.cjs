const fs = require('fs')
const path = require('path')
const $ = require('gogocode');
const { getModuleTitleLevel , isEntry , isModules , excludeFileSuffix} = require('./utils.cjs')


const templateCode = fs.readFileSync(path.resolve(__dirname, './template.md'), 'utf-8')

const code = fs.readFileSync(path.resolve(__dirname, '../../src/index.ts'), 'utf-8')

const AST = $(code, {
});

const node = AST.find('/**$_$0*/')[0]

let str = node.nodePath.value.value.replace(/[*/ ]/g, '')

const srcPath = path.resolve(__dirname, '../../src')

const files = fs.readdirSync(srcPath)

let modulesCode = `

`

function deepReader(filename, level, parentPath , { parentFileName }) {
    const stat = fs.statSync(path.join(parentPath , filename))
    const parentStat = fs.statSync(path.resolve(parentPath))
  
    if(stat.isDirectory()) {
        if(!isModules(filename)) {
            modulesCode += `\r\n${getModuleTitleLevel(level)} ${filename}`
        }
        const children = fs.readdirSync(path.join(parentPath , filename))
        children.forEach(i => deepReader(i , level + 1 , path.join(parentPath , filename) , { parentFileName : filename }))
    }else if(stat.isFile()) {
        console.log(parentStat.filename);
        if(isEntry(filename) || isModules(parentFileName)) {
            if(isModules(parentFileName)) {
                modulesCode += `\r\n${getModuleTitleLevel(level - 1)} ${excludeFileSuffix(filename)}`
            }
            const code = getCommentCode(path.join(parentPath, filename))
            modulesCode += code 
            return 
        } 
    }
}


function getCommentCode ( path ) {
    const code = fs.readFileSync(path , 'utf-8')
    const AST = $(code)
    const node = AST.find('/**$_$0 */')
    let str = node[0].nodePath.value.value.replace(/[*/ ]/g, '')
    return str + '\r\n'
}

files.filter(i => i !== 'index.ts').forEach(i => {
    deepReader(i, 1, srcPath , { parentFileName : i})
})


str += modulesCode 

const resultCode = templateCode.replace('<!-- AUR GEN CODE BLOCK -->', str)

fs.writeFileSync(path.resolve(__dirname, '../../README.md'), resultCode)




