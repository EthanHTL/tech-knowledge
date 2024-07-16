import type { ThemeOptions } from 'vuepress-theme-hope'
import themeHtl from './theme/index'

import { plugins } from './theme/plugin'
import { locales } from './theme/locales'
import { encrypt } from './encrypt/index'

const hostname = process.env.HOSTNAME || ''

const themeOptions: ThemeOptions = {
  author: {
    name: 'H T L',
    url: 'https://EthanHTL.github.io/tech-knowledge/',
  },
  hostname,

  docsDir: 'docs',
  favicon: '/favicon.ico',
  logo: '/logo.svg',
  repo: 'https://github.com/EthanHTL/tech-knowledge', // 仓库地址
  darkmode: 'toggle',
  fullscreen: true,
  headerDepth: 3,  // 右侧标题目录默认显示级别
  // iconAssets: ["fontawesome", "fontawesome-with-brands","iconify"], // 字体图标资源链接
  iconAssets: "iconify", // 字体图标资源链接
  // iconPrefix: "fa-solid fa-",

  pageInfo: ['Author', 'Original', 'PageView', 'Date', 'Category', 'Tag', 'ReadingTime',], // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序。

  // vuepress-theme-hope 主题插件
  plugins,

  // 加密配置
  encrypt,

  locales: locales,


  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
}

// 导出主题
export default themeHtl(themeOptions)
