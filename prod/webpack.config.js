var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var styleLintPlugin = require('stylelint-webpack-plugin');
// var UglifyJsPlugin = require('webpack-uglify-js-plugin');
var fileloader = require('file-loader');

require('es6-promise').polyfill();

module.exports = {
  entry: './src/scripts/main.js',

  output: {
    path: path.join(__dirname, '/web/'),
    filename: 'js/script.js',
  },

  plugins: [
    // Specify the resulting CSS filename
    new ExtractTextPlugin('style/main.css'),

    // Stylelint plugin
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: '',
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),

    new webpack.OldWatchingPlugin(),

    /*    Minification JS/CSS
         new UglifyJsPlugin({
            cacheFolder: path.join(__dirname, 'web/front/cache'),
            debug: false,
            minimize: true,
            output: {
              comments: false
            },
            compressor: {
              warnings: false
            }
          }),*/


  ],

  resolve: {
    alias: {
      TweenMax: path.resolve(path.join(__dirname, 'node_modules/gsap/src/uncompressed/TweenMax')),
      TimelineMax: path.resolve(path.join(__dirname, 'node_modules/gsap/src/uncompressed/TimelineMax')),
      TweenLite: path.resolve(path.join(__dirname, 'node_modules/gsap/src/uncompressed/TweenLite'))
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,

      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss!sass-loader?outputStyle=expanded'
        )
      },
      {
        test: /\.(png|svg|jpg)$/,
        loader: 'file-loader?name=./../web/images/[name].[ext]'
      }
    ]
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],

  stats: {
    // Colored output
    colors: true
  },
  node: {
    fs: "empty"
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};