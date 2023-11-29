import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.common';

const prod: webpack.Configuration = {
  ...common,
  mode: 'production',
  output: {
    filename: 'static/[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {},
  plugins: [],
};
