// Github 评论服务
// 配置参考 官方网址：https://giscus.app/zh-CN
import type { GiscusPluginOptions } from '@vuepress/plugin-comment'

export const gicus: GiscusPluginOptions = {
    provider: 'Giscus',
    repo: 'EthanHTL/tech-knowledge',
    repoId: 'R_kgDOMW6Vag',
    category: 'Announcements',
    categoryId: 'DIC_kwDOMW6Vas4ChMZC',
    mapping: 'pathname',
}
