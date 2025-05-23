import develop from './modules/develop'
import efficiency from './modules/efficiency'

interface MenuItem {
  /**
   * 标题
   */
  title: string
  /**
   * 图标
   * @example 'i-tabler-logo-github' | 'https://statics.moonshot.cn/kimi-chat/favicon.ico'
   */
  icon?: string
  /**
   * 链接地址
   */
  url?: string
  /**
   * logo
   */
  logo?: string
  /**
   * 描述
   */
  description?: string
  /**
   * 是否废弃
   */
  deprecated?: boolean
  /**
   *
   */
  children?: MenuItem[]
  /**
   * 标签
   */
  tags?: string[]
}

const menuDataList: MenuItem[] = [
  efficiency,
  develop,
]

export type { MenuItem }

export default menuDataList
