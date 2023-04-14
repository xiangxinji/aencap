const createNav = () => {
  return [
    {
      text: "基础",
      link: "/base",
    },
    {
        text: "元素",
      link: "/dom",
    },
    {
        text: "组合式",
      link: "/hooks",
    },
    {
        text: "树结构",
      link: "/tree",
    },
    {
        text: "验证",
      link: "/validate",
    },
    {
        text: "交互",
      link: "/interactive",
    },
  ];
};
export default {
  title: "Aencap",
  lang: "zh-CN",
  themeConfig: {
    nav: createNav(),
  },
};
