import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import common from './webpack.common.js';
import { merge } from 'webpack-merge';

const dev = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
  module: {},
  plugins: [new ForkTsCheckerWebpackPlugin()],
});

export default dev;
