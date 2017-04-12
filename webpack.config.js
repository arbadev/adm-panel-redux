const LiveReloadPlugin = require('webpack-livereload-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/assets/index.html`,
  filename: 'index.html',
  inject: 'body',
})

const ExtractTextPluginConfig =
new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true })

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: `${__dirname}/build`,
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.scss', '.jsx', '.css'],
  },
  devServer: {
    port: 8080,
    inline: true,
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /(\.scss|.css)$/,
        exclude: /node_modules/,
        loader: `style-loader!css-loader?${cssModules}`,
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig, LiveReloadPlugin, ExtractTextPluginConfig],
}
