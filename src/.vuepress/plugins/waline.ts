import type { WalinePluginOptions } from '@vuepress/plugin-comment'

export const waline: WalinePluginOptions = {
  provider: 'Waline',
  serverURL: '//ethanhtl.github.io/tech-knowledge/',
  reaction: true,
  pageview: true,
}
