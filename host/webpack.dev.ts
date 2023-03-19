import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import commonConfig from './webpack.common';

const devServer: DevServerConfiguration = {
  hot: false,
  port: 3000,
  client: {
    overlay: false,
  },
  historyApiFallback: true,
};

const config: Configuration = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer,
};

export default merge(commonConfig, config);
