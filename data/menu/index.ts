import ai from './modules/ai'
import Backend from './modules/backend'
import Blog from './modules/blog'
import Developed from './modules/developed'
import freeApi from './modules/freeApi'
import Frontend from './modules/frontend'
import Images from './modules/images'
import movieCollection from './modules/movie-collection'
import OnlineMovie from './modules/online-movie'
import React from './modules/react'
import tools from './modules/tools'
import Vue from './modules/vue'

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
   *
   */
  children?: MenuItem[]
  /**
   * 标签
   */
  tags?: string[]
}

const menuDataList: MenuItem[] = [
  ai,
  Frontend,
  Vue,
  React,
  Backend,
  freeApi,
  Blog,
  Developed,
  OnlineMovie,
  movieCollection,
  tools,
  Images,
]

export type { MenuItem }

export default menuDataList
