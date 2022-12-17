function getModuleTitleLevel(level) {
  return Array.from({ length: level + 1 })
    .map((i) => "#")
    .join("");
}

// 是否是目录的入口文件
function isEntry(filename) {
  return filename === "index.ts";
}

// 是否是 modules 目录
function isModules(filename) {
  return filename === "modules";
}

// 忽略文件后缀
function excludeFileSuffix(filename) {
  return filename.substr(0, filename.lastIndexOf("."));
}

// 生成 markdown table 头
function getMarkdownTableHeader(headers) {
  return `| ${headers.map((i) => ` ${i} `).join("|")} |`;
}
// 生成 markdown table
function getMarkdownTableHeaderLine(headers) {
  return `| ${headers.map((i) => ` - `).join("|")} |`;
}
// 生成 markdown table
function getMarkdownTableRows(rows) {
  const t = rows.map((i) => {
    return `| ${i.map((j) => ` ${j} `).join("|")} |`;
  });

  return t.join('\r\n') 
}
module.exports = {
  getModuleTitleLevel,
  isEntry,
  isModules,
  excludeFileSuffix,
  getMarkdownTableHeader,
  getMarkdownTableHeaderLine,
  getMarkdownTableRows,
};
