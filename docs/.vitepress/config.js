import { defineConfig } from 'vitepress'
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
    {
      text: '更新日志',
      link: '/change-log'
    }
  ];
};
export default defineConfig({
  title: "Aencap",
  lang: "zh-CN",
  base: '/aencap/',
  themeConfig: {
    nav: createNav(),
    search: {
      provider: 'local'
    }
  },
});
