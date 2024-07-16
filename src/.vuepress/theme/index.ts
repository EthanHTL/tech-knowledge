// .vuepress/theme/index.ts
import { getDirname, path } from 'vuepress/utils'
import { hopeTheme } from 'vuepress-theme-hope'
import type { ThemeOptions, ThemeData } from 'vuepress-theme-hope'

const __dirname = getDirname(import.meta.url)

export default (options: ThemeOptions) => {
  return (app) => {
    return {
      name: 'vuepress-theme-htl',

      extends: hopeTheme(options, { custom: true }),

      alias: {
        // 主题组件替换  参考https://theme-hope.vuejs.press/zh/guide/advanced/replace.html
        // '@theme-hope/components/NormalPage': path.resolve(
        //   __dirname,
        //   './components/NormalPage.vue'
        // ),

        // 必应壁纸
        // '@theme-hope/modules/blog/components/BlogHero': path.resolve(
        //   __dirname,
        //   './components/BlogHero.vue'
        // ),

        // 一言描述
        "@theme-hope/modules/blog/components/BlogHero": path.resolve(
          __dirname,
          "./components/BlogHero.vue",
        ),
      },
    }
  }
}
