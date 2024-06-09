import { path } from 'vuepress/utils'
import {
  autoFrontmatterPlugin,
  FrontmatterArray,
  FrontmatterObject,
} from '@vuepress-plume/plugin-auto-frontmatter'
import { format } from 'date-fns'
import {
  getCurrentDirname,
  getPackage,
  nanoid,
  normalizePath,
  pathJoin,
  withBase,
} from './utils.js'

const baseFrontmatter: FrontmatterObject = {
  author(author: string, { relativePath }, data: any) {
    if (author) return author
    if (data.friends) return
    return data.author || null
  },
  date(date: string, { relativePath }, data: any) {
    // console.log('date', date);
    // console.log('data', data);
    var formatStr = 'yyyy-MM-dd'

    if (date) return format(date, formatStr)
      
    if (data.date) return format(data.date, formatStr)

    return format(new Date(), formatStr)
  },
  // createTime(formatTime: string, { createTime }, data: any) {
  //   if (formatTime) return formatTime
  //   if (data.friends) return
  //   return format(new Date(createTime), 'yyyy/MM/dd HH:mm:ss')
  // },
}

export default autoFrontmatterPlugin({
  include: '**/**.md',
  frontmatter: {
    title(title, { relativePath }) {
      if (title) return title
      const basename = path.basename(relativePath || '', '.md')
      return basename
    },
    ...baseFrontmatter,
    //自定义字段
    // permalink(title, { relativePath }) {
    //   if (title) return title
    //   const basename = path.basename(relativePath || '', '.md')
    //   return basename
    // },
  },
})
