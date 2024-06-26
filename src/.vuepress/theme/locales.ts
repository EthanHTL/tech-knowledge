import { LocaleConfig } from 'vuepress/shared'
import { enNavbar, zhNavbar } from '../navbar/index.js'
import { enSidebar, zhSidebar } from '../sidebar/index.js'

export const locales: LocaleConfig = {
  '/': {
    navbar: zhNavbar,

    sidebar: zhSidebar,

    footer: '默认页脚',

    displayFooter: true,

    // blog: {
    //   description: '一个IT社畜的技术分享',
    //   intro: '/intro',
    // },

    blog: {
      description: '一个IT社畜的技术分享',
      intro: '/intro',
      medias: {
        Email: '#',
        Gitee: '',
        GitHub: '',
        Gmail: '#',
        Pocket: '',
        QQ: '',
        VuePressThemeHope: {
          icon: 'https://theme-hope-assets.vuejs.press/logo.svg',
          link: 'https://theme-hope.vuejs.press',
        },
      },
    },

    // page meta
    metaLocales: {
      editLink: '在 GitHub 上编辑此页',
    },
  },
  '/en/': {
    navbar: enNavbar,

    sidebar: enSidebar,

    footer: 'Default footer',

    displayFooter: true,

    // blog: {
    //   description: 'A FrontEnd programmer',
    //   intro: '/en/intro',
    // },

    blog: {
        description: 'A FrontEnd programmer',
        intro: '/en/intro',
        medias: {
          Baidu: 'https://example.com',
          BiliBili: 'https://example.com',
          Bitbucket: 'https://example.com',
          Dingding: 'https://example.com',
          Discord: 'https://example.com',
          Dribbble: 'https://example.com',
          Email: 'mailto:info@example.com',
          Evernote: 'https://example.com',
          Facebook: 'https://example.com',
          Flipboard: 'https://example.com',
          Gitee: 'https://example.com',
          GitHub: 'https://example.com',
          Gitlab: 'https://example.com',
          Gmail: 'mailto:info@example.com',
          Instagram: 'https://example.com',
          Lark: 'https://example.com',
          Lines: 'https://example.com',
          Linkedin: 'https://example.com',
          Pinterest: 'https://example.com',
          Pocket: 'https://example.com',
          QQ: 'https://example.com',
          Qzone: 'https://example.com',
          Reddit: 'https://example.com',
          Rss: 'https://example.com',
          Steam: 'https://example.com',
          Twitter: 'https://example.com',
          Wechat: 'https://example.com',
          Weibo: 'https://example.com',
          Whatsapp: 'https://example.com',
          Youtube: 'https://example.com',
          Zhihu: 'https://example.com',
          VuePressThemeHope: {
            icon: 'https://theme-hope-assets.vuejs.press/logo.svg',
            link: 'https://theme-hope.vuejs.press',
          },
        },
      },
  
    metaLocales: {
      editLink: 'Edit this page on GitHub',
    },
  },
}
