const fs = require('fs')
const path = require('path')
const { build , render } = require('./ast.cjs')
const $ = require('gogocode');

const templateCode = fs.readFileSync(path.resolve(__dirname, './template.md'), 'utf-8')

const code = fs.readFileSync(path.resolve(__dirname, '../../src/index.ts'), 'utf-8')

const AST = $(code, {
});

const node = AST.find('/**$_$0*/')[0]

let str = node.nodePath.value.value.replace(/[*/ ]/g, '')




const nodes = build()

const markdown = render(nodes)


const resultCode = templateCode.replace('<!-- AUR GEN CODE BLOCK -->', markdown)

fs.writeFileSync(path.resolve(__dirname, '../../README.md'), resultCode)




