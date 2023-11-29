import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.common';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const dev: Configuration = {
  ...common,
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  module: {},
  plugins: [],
};
