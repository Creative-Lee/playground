import path from 'path';
import common from './webpack.common.js';
import { EsbuildPlugin } from 'esbuild-loader';
import { merge } from 'webpack-merge';

const prod = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve('./', 'dist'),
    filename: 'static/[contenthash].js',
    clean: true,
  },
  module: {},
  plugins: [],

  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'ES6',
      }),
    ],
  },
});

export default prod;
