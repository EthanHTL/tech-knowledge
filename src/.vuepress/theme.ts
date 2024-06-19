import themeHtl from './theme/index.js'
import { ThemeOptions } from 'vuepress-theme-hope'

import { plugins } from './theme/plugins/index'
import { locales } from './theme/locales.js'
import { encrypt } from './encrypt/index'

const themeOptions: ThemeOptions = {
  hostname: '',
  // favicon: '/favicon.ico',
  favicon: '/icon.gif',
  author: {
    name: 'H T L',
    url: 'https://EthanHTL.github.io/tech-knowledge/',
  },

  darkmode: 'toggle',

  fullscreen: true,

  // 字体图标资源链接
  iconAssets: 'fontawesome-with-brands',

  logo: '/logo.svg',
  // icon: '/logo.svg',

  // 仓库地址
  repo: 'https://github.com/EthanHTL/tech-knowledge',

  docsDir: 'src',

  // vuepress-theme-hope 主题插件
  plugins,

  // 加密配置
  encrypt,

  locales,

 
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
}

// 导出主题
export default themeHtl(themeOptions)
