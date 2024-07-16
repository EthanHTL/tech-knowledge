import { MarkdownEnhancePluginOptions } from 'vuepress-plugin-md-enhance'

export const mdEnhance: MarkdownEnhancePluginOptions = {
  align: true,
  attrs: true,
  codetabs: true, //代码块分组
  component: true,
  demo: true,
  figure: true,
  imgLazyload: true,
  imgSize: true,
  include: true, // 支持导入其他文件
  mark: true,
  plantuml: true,
  spoiler: true,
  stylize: [
    {
      matcher: 'Recommended',
      replacer: ({ tag }) => {
        if (tag === 'em')
          return {
            tag: 'Badge',
            attrs: { type: 'tip' },
            content: 'Recommended',
          }
      },
    },
  ],
  sub: true,
  sup: true,
  tabs: true,
  tasklist: true,
  vPre: true,

  // 在启用之前安装 chart.js
  // chart: true,

  // insert component easily

  // 在启用之前安装 echarts
  // echarts: true,

  // 在启用之前安装 flowchart.ts
  // flowchart: true,

  // gfm requires mathjax-full to provide tex support
  // gfm: true,

  // 在启用之前安装 katex
  // katex: true,

  // 在启用之前安装 mathjax-full
  // mathjax: true,

  // 在启用之前安装 mermaid
  // mermaid: true,

  // playground: {
  //   presets: ["ts", "vue"],
  // },

  // 在启用之前安装 reveal.js
  // revealJs: {
  //   plugins: ["highlight", "math", "search", "notes", "zoom"],
  // },

  // 在启用之前安装 @vue/repl
  // vuePlayground: true,

  // install sandpack-vue3 before enabling it
  // sandpack: true,
}
