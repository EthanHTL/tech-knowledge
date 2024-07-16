import { path } from 'vuepress/utils'
import { format } from 'date-fns'
import type { AutoFrontmatterOptions, FrontmatterObject } from '@vuepress-plume/plugin-auto-frontmatter'
import { getnanoid, normalizePath, } from './utils.js'

const baseFrontmatter: FrontmatterObject = {
  author(author: string, data: any) {
    if (author) return author
    if (data.friends) return
    return data.author || null
  },
  date(date: string, { relativePath }, data: any) {
    var formatStr = 'yyyy-MM-dd'
    if (date) return format(date, formatStr)
    if (data.date) return format(data.date, formatStr)
    return format(new Date(), formatStr)
  },
}

const regex = /[0-9-]/g;

export const frontmatter: AutoFrontmatterOptions = {
  include: '**/**.md',
  // exclude: ['../../README.md'],
  frontmatter: [
    {
      include: '**/{readme,README,index}.md',
      frontmatter: {
        title(title, { relativePath }) {
          if (title) return title
          console.log('prefix', relativePath)
          return ''
        },
        ...baseFrontmatter,
        article(article) {
          if (article) return article
          return null
        },
        index(index) {
          if (index) return index
          return null
        },
        //自定义字段
        permalink(permalink, { relativePath }, data: any) {

          let prefix = path.dirname(relativePath)
          // console.log('prefix', prefix)
          // if(relativePath.includes('README')) console.log('relativePath', relativePath)
          if (permalink) return permalink
          // return normalizePath(`/${prefix}/`)
          return null
        },
      },
    },
    {
      include: '*',
      frontmatter: {
        title(title, { relativePath }) {
          if (title) return title
          const basename = path.basename(relativePath || '', '.md')
          return basename
        },
        ...baseFrontmatter,
        permalink(permalink, { relativePath }, data: any) {
          if (relativePath.includes('README')) console.log('relativePath', relativePath)
          if (permalink) return permalink

          // 生成permalink 过滤掉'01-' eg.'03-Java/01-CODE/04-MAC/05-GG'  -> 'java/code/mac/gg'
          // 
          let old_prefix = path.dirname(relativePath)
          const regex = /[0-9-]/g;
          const prefix = old_prefix.replace(regex, '').toLowerCase();
          // return normalizePath(`/${prefix}/${getnanoid()}/`)
          return normalizePath(`/${old_prefix}/${getnanoid()}/`)
        },
      },
    },
  ],
}
