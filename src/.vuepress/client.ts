import { defineClientConfig } from 'vuepress/client'
import { setupTransparentNavbar } from 'vuepress-theme-hope/presets/transparentNavbar.js'
import { setupRunningTimeFooter } from 'vuepress-theme-hope/presets/footerRunningTime.js'
import { setupSnowFall } from 'vuepress-theme-hope/presets/snowFall.js'

import AutoArticleListLayout from './theme/layouts/AutoArticleListLayout'
import AutoArticleList from './theme/components/AutoArticleList'

import 'vuepress-theme-hope/presets/hr-driving-car.scss' // 为所有 hr 元素添加驾驶的车图标
import 'vuepress-theme-hope/presets/bounce-icon.scss' // 为页面图标添加鼠标悬停的跳动效果。
// import 'vuepress-theme-hope/presets/shinning-feature-panel.scss' // 为项目主页的特性添加闪光效果。
// import 'vuepress-theme-hope/presets/hide-navbar-icon.scss' // 隐藏导航栏图标。
// import 'vuepress-theme-hope/presets/hide-sidebar-icon.scss' // 隐藏导航栏图标。

export default defineClientConfig({
  // 自定义页面布局，配合[formatter] layout: AutoArticleListLayout 使用
  // 参考：https://www.zhaobc.site/posts/theme/auto-articles.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80
  layouts: {
    // AutoArticleListLayout,
  },

  enhance: ({ app, router, siteData }) => {
    // app.component('AutoArticleList', AutoArticleList)
  },

  setup() {
    // 透明导航栏
    setupTransparentNavbar({
      type: 'blog-homepage',
      light: '#000000B7',
      dark: '#FFFFFFBA',
    })

    // 站点运行时间
    setupRunningTimeFooter(
      new Date('2022-01-01'),
      {
        '/en/':
          'Running time: :day days :hour hours :minute minutes :second seconds',
        '/': '已运行 :day 天 :hour 小时 :minute 分钟 :second 秒',
      },
      true
    )

    // 下雪效果
    setupSnowFall()
  },
})
