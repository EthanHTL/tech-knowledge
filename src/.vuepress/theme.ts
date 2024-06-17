import themeHtl from './theme/index.js'
import { ThemeOptions } from 'vuepress-theme-hope'
import { enNavbar, zhNavbar } from './navbar/index.js'
import { enSidebar, zhSidebar } from './sidebar/index.js'
import { plugins } from './theme/plugins/index'
import { encrypt } from './encrypt/index'

const themeOptions: ThemeOptions = {
  hostname: '',

  author: {
    name: 'H T L',
    url: '',
  },

  darkmode: 'toggle',

  fullscreen: true,

  iconAssets: 'fontawesome-with-brands',

  logo: '/logo.svg',

  repo: 'https://EthanHTL.github.io/tech-knowledge/',

  docsDir: 'src',

  // vuepress-theme-hope 主题插件
  plugins,

  // 加密配置
  encrypt,

  locales: {
    '/': {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: '默认页脚',

      displayFooter: true,

      blog: {
        description: '一个IT社畜的技术分享',
        intro: '/intro',
      },

      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
    '/en/': {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: 'Default footer',

      displayFooter: true,

      blog: {
        description: 'A FrontEnd programmer',
        intro: '/en/intro',
      },

      metaLocales: {
        editLink: 'Edit this page on GitHub',
      },
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
}

// 导出主题
export default themeHtl(themeOptions)
