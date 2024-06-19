import type { PluginConfig } from 'vuepress'
import autoFrontmatterPlugin from './autoFrontmatterPlugin'
import searchProPlugin from './searchProPlugin'
import catalogPlugin from './catalog'
// import prismjsPlugin from './prismjsPlugin'

export default [
    autoFrontmatterPlugin,
    searchProPlugin,
    catalogPlugin,
    // prismjsPlugin,
]
