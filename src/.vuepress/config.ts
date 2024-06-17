import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import plugins from './plugins/index.js'

export default defineUserConfig({
  base: '/tech-knowledge/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'H T L',
      description: '一个IT社畜的技术分享',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Blog Demo',
      description: 'A blog demo for vuepress-theme-hope',
    },
  },

  theme,

  // vuepress 插件配置
  plugins,

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  // 和 PWA 一起启用
  // shouldPrefetch: false,get
})
