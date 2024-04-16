/*
 * @Author: dushuai
 * @Date: 2024-03-11 14:40:06
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-11 16:04:34
 * @description: 一些配置数据
 */

type Website = {
  name: string,
  href: string,
  icon: string,
  iconType?: 'icon' | 'img'
}

export const useData = () => {
  /**
   * 网站列表
   */
  const websites = ref<Website[]>([
    { name: '主页', href: 'https://xinqiangdai.cn/', icon: 'mdi:web-check' },
    { name: '博客', href: 'https://blog.xinqiangdai.cn/', icon: 'fa6-solid:blog' },
    { name: '今日热榜', href: 'https://hot.imsyy.top/', icon: 'fa6-solid:fire' },
  ])

  return {
    websites
  }
}
