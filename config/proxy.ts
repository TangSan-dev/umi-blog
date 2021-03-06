/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  development: {
    '/api/': {
      target: 'http://localhost:4000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  production: {
    '/api/': {
      target: 'http://122.51.84.54:4000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
