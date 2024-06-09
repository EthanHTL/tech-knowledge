import type { PluginConfig } from 'vuepress'
import autoFrontmatterPlugin from './autoFrontmatterPlugin'
import searchProPlugin from './searchProPlugin'
import catalogPlugin from './catalog'

export default [
    autoFrontmatterPlugin,
    searchProPlugin,
    catalogPlugin,
]
