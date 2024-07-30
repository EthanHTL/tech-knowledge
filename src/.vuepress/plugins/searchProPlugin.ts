import type { SearchProPluginOptions } from 'vuepress-plugin-search-pro'
import { cut } from 'nodejs-jieba'

export const searchPro: SearchProPluginOptions = {
  queryHistoryCount: 7,
  resultHistoryCount: 7,
  indexContent: true,
  indexOptions: {
    // 使用 nodejs-jieba 进行分词
    tokenize: (text, fieldName) =>
      fieldName === 'id' ? [text] : cut(text, true),
  },
  autoSuggestions: false,
  customFields: [
    {
      name: "author",
      getter: (page) => page.frontmatter.author,
      formatter: {
        '/': '作者：$content',
        '/en/': 'Author: $content'
      }
    },
    {
      getter: (page) => page.frontmatter.category,
      formatter: {
        '/en/': 'Category: $content',
        '/': '分类：$content',
      }
    },
    {
      getter: (page) => page.frontmatter.tag,
      formatter: {
        '/': 'Tag: $content',
        '/zh/': '标签：$content',
      }
    },
  ],
  locales: {
    '/': {
      placeholder: '开始搜索',
    },
    '/en/': {
      placeholder: 'start searching',
    },
  }
}
