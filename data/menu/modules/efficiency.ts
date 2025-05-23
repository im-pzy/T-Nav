import type { MenuItem } from '..'

export default {
  title: '效率工具',
  icon: 'i-tabler-tool',
  children: [
    {
      title: 'PasteEx',
      logo: 'https://cdn.pzyer.com/softwareImg/PasteEx.ico',
      url: 'https://github.com/huiyadanli/pasteex',
      description: '将剪切板内容直接粘贴为文件'
    },
    {
      title: 'Clipdiary',
      logo: 'http://clipdiary.com/favicon.ico',
      url: 'http://clipdiary.com/',
      description: '剪切板历史记录工具'
    },
    {
      title: 'Quicker',
      logo: 'https://getquicker.net/quicker_square.png',
      url: 'https://getquicker.net/',
      description: '指尖工具箱'
    },
    {
      title: 'Beyond Compare',
      logo: 'https://www.scootersoftware.com/bc_icon.png',
      url: 'https://www.scootersoftware.com/',
      description: '文件(夹)内容比较'
    },
    {
      title: 'Everything',
      logo: 'https://www.voidtools.com/favicon.ico',
      url: 'https://www.voidtools.com/zh-cn/',
      description: '文件秒搜神器'
    },
    {
      title: 'QuickLook',
      logo: 'https://user-images.githubusercontent.com/1687847/82130498-8c3eac80-97d4-11ea-9e88-372ab9c50295.png',
      url: 'https://github.com/QL-Win/QuickLook/releases/',
      description: '空格键一键预览文件'
    }
  ],
} as MenuItem
