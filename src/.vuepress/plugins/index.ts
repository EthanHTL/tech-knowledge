import type { PluginConfig } from 'vuepress'

// 配置
import { frontmatter } from './autoFrontmatterPlugin'
import { searchPro } from './searchProPlugin'
import { catalog } from './catalog'
import { gicus } from './giscus'


// 插件
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { autoFrontmatterPlugin } from '@vuepress-plume/plugin-auto-frontmatter'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { commentPlugin } from '@vuepress/plugin-comment' // 评论

// 导出
export * from './autoFrontmatterPlugin'
export * from './waline'
export * from './searchProPlugin'
export * from './catalog'
export * from './mdEnhance'
export * from './pwa'
export * from './bundlerOptions'

export default [   // export default [  ==  export const plugins: PluginConfig = [ 
    autoFrontmatterPlugin(frontmatter),
    searchProPlugin(searchPro),
    catalogPlugin(catalog),
    commentPlugin(gicus),
]
