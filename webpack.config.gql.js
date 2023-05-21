const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  mode: "production",
  entry: './src/graphql/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/gql')
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
          /src\/rest/,
          /coverage/,
          /lib/,
          /dist/,
          /scripts/
        ]
      }
    ]
  }
}

module.exports = config;