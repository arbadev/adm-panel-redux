const LiveReloadPlugin = require('webpack-livereload-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const TransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread')

const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/assets/index.html`,
  filename: 'index.html',
  inject: 'body',
})

const ExtractTextPluginConfig =
new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true })

// const TransformObjectRestSpreadConfig = new TransformObjectRestSpread()

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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig, LiveReloadPlugin, ExtractTextPluginConfig],
}
