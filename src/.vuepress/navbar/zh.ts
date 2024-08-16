import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  '/',
  '/cookbook/',
  '/04-spring/',
  {
    text: "Java",
    icon: "i-logos:java w-1em h-1em",
    link: "/03-Java/",
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
  
])
