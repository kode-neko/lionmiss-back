import path from 'path';
import {Configuration} from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: Configuration = {
  entry: path.resolve(__dirname, './src/index.ts'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, "./src")],
        exclude: [
          /node_modules/,
          /coverage/,
          /lib/,
          /dist/,
          /src\/scripts/
        ]
      }
    ]
  }
}

export default config;