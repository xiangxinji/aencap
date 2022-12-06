const {
  getModuleTitleLevel,
  getMarkdownTableHeader,
  getMarkdownTableHeaderLine,
  getMarkdownTableRows,
} = require("./utils.cjs");
/**
 * 创建一个 body 节点
 * @returns
 */
function createBodyNode() {
  return {
    type: "body",
    children: [],
  };
}
/**
 * 创建 标题节点
 * @param {*} level
 * @param {*} title
 * @returns
 */
function createHeadingNode(level, title) {
  return {
    type: "heading",
    level,
    title,
    code() {
      return `${getModuleTitleLevel(level)} ${title}\r\n`;
    },
    children: [],
  };
}

/**
 * 创建一个文本节点
 * @param {*} content
 * @returns
 */
function createTextNode(content) {
  return {
    type: "text",
    code() {
      return content + '\r\n';
    },
  };
}

/**
 * 创建一个表格节点
 * @param {*} headers 
 * @param {*} rows 
 * @returns 
 */
function createTableNode(headers, rows) {
  return {
    type: "table",
    headers,
    rows,
    code() {
      return `${getMarkdownTableHeader(
        headers
      )}\r\n${getMarkdownTableHeaderLine(headers)}\r\n${getMarkdownTableRows(
        rows
      )}`;
    },
  };
}



module.exports = {
  createHeadingNode,
  createBodyNode,
  createTextNode,
  createTableNode,
};
