/* eslint-disable */
export const required = {
  required: true,
  message: "必填项",
  trigger: ["blur", "change"],
};

export const password = {
  pattern: "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}",
  message: "必须包含大小字母、数字、特殊字符，长度8-30",
  trigger: ["blur", "change"],
};
export const email = {
  pattern:
    "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$",
  message: "请输入正确邮件地址",
  trigger: ["blur", "change"],
};
export const phone = {
  pattern: "^1[0-9]{10}$",
  message: "请输入正确手机号",
  trigger: ["blur", "change"],
};
export const cn = {
  pattern: "[\u4e00-\u9fa5]",
  message: "必须中文",
  trigger: ["blur", "change"],
};
export const en = {
  pattern: "[A-Za-z]",
  message: "必须字母",
  trigger: ["blur", "change"],
};
export const number = {
  pattern: "^-?\\d+$",
  message: "必须数字",
  trigger: ["blur", "change"],
};
export const positiveNumber = {
  pattern: /^[1-9]+[0-9]*$/,
  message: "必须是正数字",
  trigger: ["blur", "change"],
};
export const numberOrEn = {
  pattern: "(^[a-zA-Z0-9]+$)",
  message: "只能是数字或者字母",
  trigger: ["blur", "change"],
};
export const numberOrEnOrUnderline = {
  pattern: "(^[a-zA-Z0-9_]+$)",
  message: "只能是数字或者字母或者下划线",
  trigger: ["blur", "change"],
};


