import * as path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { ModuleFederationPlugin } = webpack.container;

const config: Configuration = {
  entry: path.resolve(__dirname, './src/index'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: 'auto',
    filename: 'bundle.js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      library: { type: 'var', name: 'cart' },
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: [
        {
          react: {
            singleton: true,
            eager: false,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            eager: false,
            requiredVersion: false,
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  stats: 'errors-only',
};

export default config;
