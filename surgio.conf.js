'use strict'
const { utils } = require('surgio')

/**
 * 使用文档：https://surgio.royli.dev/
 */
module.exports = {
  /**
   * 远程片段
   * 文档：https://surgio.royli.dev/guide/custom-config.html#remotesnippets
   */
  remoteSnippets: [
    /**
     * Custom Rules
     */
  ],
  customFilters: {
    ukFilter: utils.useSortedKeywords(['英国', 'UK']),
    nlFilter: utils.useSortedKeywords(['荷兰']),
    deFilter: utils.useSortedKeywords(['德国', 'DE']),
    frFilter: utils.useSortedKeywords(['法国', 'FR']),
  },
  flags: {
    '🇮🇱': ['ISL', 'Israel', '以色列'],
    '🇨🇱': ['智利'],
    '🇳🇿': ['新西兰'],
  },
  artifacts: [
    /**
     * Surge Profiles
     */
  ],

  /**
   * 订阅地址的前缀部分，以 / 结尾
   * 例如阿里云 OSS 的访问地址 https://xxx.oss-cn-hangzhou.aliyuncs.com/
   */
  urlBase: `https://example.com/get-artifact/`,
  surgeConfig: {
    v2ray: 'native', // 默认 'native', 可选 'external'
    shadowsocksFormat: 'ss', // 默认 'ss', 可选 'custom'
  },
  gateway: {
    auth: true,
    accessToken: 'YourTokenHere',
  },
  // 非常有限的报错信息收集
  analytics: true,
}
