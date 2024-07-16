import { defineUserConfig } from 'vuepress'
import plugins from './plugins/index'
import {bundlerOptions} from './plugins/bundlerOptions'
import theme from './theme'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/',
  port: 9090,
  // 站点多语言配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'HTL',
      description: '技术分享',
    },
    '/en/': {
      lang: 'en-US',
      title: 'HTL',
      description: 'A blog demo for vuepress-theme-hope',
    },
  },

  // themeHtl  ./theme/index.ts
  theme,

  // vuepress 插件配置
  plugins,

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  markdown: {
    headers: {
      // 用到哪一级就提取哪一级
      level: [2, 3, 4, 5, 6],
    },
  },

  // bundler: viteBundler(bundlerOptions)
  // 和 PWA 一起启用
  // shouldPrefetch: false,get
})
