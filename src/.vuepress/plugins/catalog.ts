import type { CatalogPluginOptions } from '@vuepress/plugin-catalog'

/* 提供目录页自动生成与 <Catalog /> 组件 */
export const catalog: CatalogPluginOptions = {
  level: 1, // 目录最大层级
  frontmatter: (path) => ({
    // 你想要的 frontmatter
    // 你可以自定义标题、作者、时间等
  }),
}
