
function getModuleTitleLevel ( level ) {
    return Array.from({length : level + 1}).map(i => '#').join('')
}


// 是否是目录的入口文件
function isEntry (filename ) {
    return filename === 'index.ts'
}


// 是否是 modules 目录
function isModules (filename ) {
    return filename === 'modules'
}

// 忽略文件后缀
function excludeFileSuffix (filename ) {
    return filename.substr(0 , filename.lastIndexOf('.'))
}

module.exports = { getModuleTitleLevel , isEntry , isModules , excludeFileSuffix}