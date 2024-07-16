import { PluginsOptions } from 'vuepress-theme-hope'
import { mdEnhance, waline } from '../plugins/index'

export const plugins: PluginsOptions = {
  blog: true,

  // 组件插件
  components: {
    components: ['Badge', 'VPCard', 'Share'],
  },

  catalog: true,

  searchPro: true,

  // 启用之前需安装 @waline/client
  // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
  // comment: {
  //   provider: 'Giscus',
  //   repo: 'EthanHTL/tech-knowledge',
  //   repoId: 'R_kgDOMG4zQw',
  //   category: 'Announcements',
  //   categoryId: 'DIC_kwDOMG4zQ84Cf93y',
  // },
  // comment: waline,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  mdEnhance,

  // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
  // pwa: ./config/pwa.ts
}
