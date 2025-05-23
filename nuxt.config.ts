// https://nuxt.com/docs/api/configuration/nuxt-config
import removeConsole from 'vite-plugin-remove-console'
import { darkThemeOverrides, lightThemeOverrides } from './themes'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'in-out' },
    head: {
      script: [{ src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4970120746558354', crossorigin: 'anonymous' }],
    },
  },

  site: {
    url: 'https://box.impzy.cn',
    name: '碰盒',
    description: '"T-Nav" 是一个专门为开发者和技术爱好者设计的导航网站。它提供了一站式的解决方案，包括编程学习资源、开发工具、开源项目以及最新的技术动态。无论你是初学者，还是经验丰富的开发者，"T-Nav" 都能帮助你快速找到所需的资源，提升你的开发效率和学习效果。我们的目标是让技术更加触手可及，让每一个用户都能在 "T-Nav" 找到属于自己的技术之路。',
    keywords: 'T-Nav,导航网站,编程资源,开发者工具,在线学习,编程教程,开源项目,技术新闻,技术社区,开发者社区,编程语言,前端开发,后端开发,全栈开发,JavaScript,Python,Java,C++,Ruby,Go,PHP,Swift,Kotlin,Rust,TypeScript,Vue,React,Angular,Django,Flask,Spring,Laravel,Ruby on Rails,Node.js,Docker,Kubernetes,DevOps,云计算,大数据,人工智能,机器学习,深度学习,数据科学,网络安全,区块链",',
    author: '其名为碰',
    defaultLocale: 'zh-CN',
    authorLink: 'https://impzy.cn',
    icon: 'https://t-nav.hb0730.me/favicon.ico',
    logo: 'https://t-nav.hb0730.me/logo.png',
    icp: '',
  },
  robots: {
    allow: '*',
    sitemap: 'https://t-nav.hb0730.me/sitemap.xml',
  },
  unocss: {
    autoImport: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  naiveui: {
    themeConfig: {
      dark: darkThemeOverrides,
      light: lightThemeOverrides,
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: [
      removeConsole(),
    ],
  },
})
