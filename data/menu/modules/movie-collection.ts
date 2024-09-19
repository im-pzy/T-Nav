import type { MenuItem } from '..'
import ffzyLogo from '@/assets/imgs/moviecollection/ffzy-logo.png'
import hongniuziyuanLogo from '@/assets/imgs/moviecollection/hongniuzy-logo.png'
import wujinzyLogo from '@/assets/imgs/moviecollection/wujinzy-logo.jpg'

export default {
  title: '影视采集',
  icon: 'i-tabler-video',
  children: [
    {
      title: '非凡资源',
      logo: ffzyLogo,
      url: 'http://www.ffzy.tv',
      description: '非凡资源，提供最新最全的电影、电视剧、综艺、动漫等资源在线观看。备用网址: ffzy1.tv ffzy2.tv ffzy3.tv ffzy4.tv ffzy5.tv',
      tags: ['电影', '电视剧', '综艺', '动漫'],

    },
    {
      title: '无尽资源网',
      logo: wujinzyLogo,
      url: 'https://wujinzy.com/',
      description: '无尽资源采集,字幕组,人人影视,字幕组影视,香港电视剧,TVB影视,美剧网,美剧在线观看,美剧下载,备用网址: wujinzy.com,wujinzy.net,wujinzy.co,wujinzy.cc',
      tags: ['电影', '电视剧', '综艺', '动漫'],
    },
    {
      title: '红牛资源',
      logo: hongniuziyuanLogo,
      url: 'https://hongniuziyuan.com/',
      description: '红牛资源网，提供最新最全的电影、电视剧、综艺、动漫等资源在线观看。备用网址: cj.hongniuzy1.com',
      tags: ['电影', '电视剧', '综艺', '动漫'],
    },

  ],
} as MenuItem
