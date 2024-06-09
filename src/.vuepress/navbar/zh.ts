import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  '/',
  '/cookbook/',
  {
    text: "mysql",
    icon: "pen-to-square",
    link: "/mysql/",
  },
  {
    text: '分类',
    icon: 'pen-to-square',
    link: '/article/',
    children: [
      {
        text: '全部',
        icon: 'pen-to-square',
        link: '/article/',
      },
      {
        text: '星标文章',
        icon: 'pen-to-square',
        link: '/star/',
      },
      {
        text: '分类',
        icon: 'pen-to-square',
        link: '/category/',
      },
      {
        text: '标签',
        icon: 'pen-to-square',
        link: '/tag/',
      },
      {
        text: '时间线',
        icon: 'pen-to-square',
        link: '/timeline/',
      },
    ]
  },
  
  // {
  //   text: "分类",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         "3",
  //       ],
  //     }
  //   ],
  // },
])
