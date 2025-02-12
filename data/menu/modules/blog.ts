import type { MenuItem } from '..'
import MeituanLogo from '@/assets/imgs/blog/meituan-logo.png'
import NgaLogo from '@/assets/imgs/blog/nga-logo.png'

export default {
  title: '博客论坛',
  icon: 'i-tabler-brand-blogger',
  children: [
    {
      title: 'V2ex',
      url: 'https://www.v2ex.com/',
      logo: 'https://www.v2ex.com/static/icon-192.png',
      description: 'V2EX 是一个基于互联网的开放式技术社区，致力于提供一个安全、便捷的技术交流平台。',
      tags: ['v2ex', '博客', '论坛'],
    },
    {
      title: '阮一峰的网络日志',
      url: 'https://www.ruanyifeng.com/blog/',
      logo: 'https://www.ruanyifeng.com/favicon.ico',
      description: '阮一峰的网络日志，记录每周值得分享的科技内容',
      tags: ['阮一峰', '博客'],
    },
    {
      title: '信息差——独立开发者出海',
      url: 'https://gapis.money',
      logo: 'https://gapis.money/logo.svg',
      description: 'Knowledge is power, info-gap is money!「信息差——独立开发者出海周刊」是一个帮助独立开发者缩小信息差的技术周刊。',
      tags: ['信息差', '博客', '周刊', '独立开发者'],
    },
    {
      title: '煎蛋',
      url: 'https://jandan.net/',
      logo: 'https://jandan.net/wp-content/themes/egg/images/logo-2018.gif',
      description: '煎蛋以译介方式传播网络新鲜资讯',
      tags: ['jandan', '博客', '论坛'],
    },
    {
      title: '吾爱破解论坛',
      url: 'https://www.52pojie.cn/',
      logo: 'https://www.52pojie.cn/favicon.ico',
      description: '吾爱破解论坛致力于软件安全与病毒分析的前沿，丰富的技术版块交相辉映，由无数热衷于软件加密解密及反病毒爱好者共同维护 ',
      tags: ['吾爱破解', '博客', '论坛'],
    },
    {
      title: 'NGA游戏玩家社区',
      url: 'https://bbs.nga.cn/',
      logo: NgaLogo,
      description: 'NGA游戏玩家社区是国内知名的玩家交流平台,以暴雪游戏专题站为起点,现已囊括魔兽世界,英雄联盟,炉石传说,风暴英雄,暗黑破坏神等游戏讨论,各类热门单机/主机/网络/手机游戏版块,以及游戏界热点讨论',
      tags: ['NGA', '博客', '论坛'],
    },
    {
      title: '美团技术团队',
      url: 'https://tech.meituan.com/',
      logo: MeituanLogo,
      description: '美团技术团队官方博客',
      tags: ['美团', '博客', '技术团队', '技术博客'],
    },
    {
      title:"电鸭社区",
      url:"https://eleduck.com/",
      logo:"https://static.eleduck.com/_next/static/media/icon-500.d77f6cfc.png",
      description:"电鸭社区是具有8年历史的远程工作招聘社区，也是远程办公互联网工作者们的聚集地。在社区，我们进行有价值的话题讨论，也分享远程、外包、零活、兼职、驻场等非主流工作机会。「只工作，不上班」是我们倡导的工作态度。",
      tags:["电鸭", "社区", "远程工作", "招聘"]
    },
    {
      title:"轻松游牧-",
      url:"https://easynomad.cn/",
      logo:"https://easynomad.cn/favicon.ico",
      description:"轻松游牧是一个远程工作聚合平台，收录了多个论坛和社交媒体上的远程招聘信息，包括全职和兼职，都是支持国内远程的岗位。同时，你也能轻松地在这里找到大量支持国内远程的公司的信息。找远程工作，上轻松游牧就对了。",
      tags:["轻松游牧", "远程工作", "招聘"]
    }
  ],
} as MenuItem
