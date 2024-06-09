import { catalogPlugin } from '@vuepress/plugin-catalog'


export default catalogPlugin({
  frontmatter: (path) => ({
    
    // 你想要的 frontmatter
    // 你可以自定义标题、作者、时间等
  }),
})
