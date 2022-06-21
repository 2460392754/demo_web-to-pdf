import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  hash: true,
  fastRefresh: {},
  //   mfsu: {},
  dynamicImport: {},

  publicPath: './',
});
