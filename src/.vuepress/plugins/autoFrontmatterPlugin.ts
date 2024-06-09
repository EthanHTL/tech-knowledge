import { path } from 'vuepress/utils'
import { format } from 'date-fns'
import {
  autoFrontmatterPlugin,
  FrontmatterObject,
} from '@vuepress-plume/plugin-auto-frontmatter'
import {
  getCurrentDirname,
  getPackage,
  getnanoid,
  normalizePath,
  pathJoin,
  withBase,
} from './utils.js'

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

export default autoFrontmatterPlugin({
  include: '**/**.md',
  exclude: ['../../README.md'],
  frontmatter: [
    {
      include: '**/{readme,README,index}.md',
      frontmatter: {
        title(title) {
          if (title) return title
          return ''
        },
        ...baseFrontmatter,
        //自定义字段
        permalink(permalink, { relativePath }, data: any) {
          if (permalink) return permalink
          let prefix = path.dirname(relativePath)
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
          if (permalink) return permalink
          let prefix = path.dirname(relativePath)
          // let basename = path.basename(relativePath) // README.md
          // return null
          return normalizePath(`/${prefix}/${getnanoid()}/`)
        },
      },
    },
  ],
})
