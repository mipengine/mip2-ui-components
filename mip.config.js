/**
 * @file MIP 页面项目配置项
 * @author
 */

module.exports = {
  dev: {
    /**
     * 该组件项目的名称
     *
     * @type {string}
     */
    name: 'v',
    /**
     * 启动mip server调试的端口号
     *
     * @type {number}
     */
    port: 8111,

    /**
     * 启用调试页面自动刷新
     *
     * @type {boolean}
     */
    livereload: true,

    /**
     * server 启动自动打开页面
     *
     * @type {string}
     */
    autoopen: false
  }
}
