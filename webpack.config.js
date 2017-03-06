/* global __dirname */
/* eslint camelcase: 0 */

const webpack = require("webpack")
const CleanPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const DashboardPlugin = require("webpack-dashboard/plugin")

const path = require("path")

const autoprefixer = require("autoprefixer")

const production = process.env.NODE_ENV === "production"
const mode = JSON.stringify(process.env.NODE_ENV)

const plugins = [

  new webpack.IgnorePlugin(/vertx/),

  new ExtractTextPlugin("bundle.css"), // <=== where should content be piped

  new webpack.optimize.CommonsChunkPlugin({
    nam : "main", // Move dependencies to our main file
    children : true, // Look for common dependencies in all children,
    minChunks : 2 // How many times a dependency must come up before being extracted
  }),

  new webpack.ProvidePlugin({
    $ : "jquery",
    jQuery : "jquery",
    "window.jQuery" : "jquery",
    moment : "moment"
  }),

  new webpack.DefinePlugin({
    __SERVER__ : !production,
    __DEVELOPMENT__ : !production,
    __DEVTOOLS__ : !production,
    "process.env" : {
      BABEL_ENV : mode,
      NODE_ENV : mode
    }
  })
]

if (production) {

  plugins.push(

    new CleanPlugin("builds/*"),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.MinChunkSizePlugin({ minChunkSize : 51200 /* ~50kb */}),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap : false,
      compress : { warnings : false },
      mangle : { keep_fnames : true }
    })
  )

} else {

  plugins.push(new DashboardPlugin())

}

module.exports = {

  entry : [
    "react-hot-loader/patch",
    "./src/index.js"
  ],

  output : {
    path : path.resolve(__dirname, "builds"),
    filename : "bundle.js",
    publicPath : "/builds/"
  },

  debug : !production,

  devtool : production ? false : "cheap-module-eval-source-map",

  resolve : {

    alias : {
      isMobile : "ismobilejs",
      fetch : "whatwg-fetch",
      "push.js" : "push.js/push"
    },

    modulesDirectories : [
      "web_modules",
      "node_modules",
      path.resolve(__dirname, "src")
    ]

  },

  plugins,

  eslint : {

    fix : true,

    failOnError : production,

    failOnWarning : production
  },

  module : {

    loaders : [

      {
        test : /\.json$/,
        loader : "json"
      },
      {
        test : /\.jsx?$/,
        loader : "babel",
        exclude : [path.join(__dirname, "node_modules")],
        query : {
          babelrc : false,
          presets : ["react", "es2015"],
          plugins : ["transform-object-rest-spread", "react-hot-loader/babel"]
        }
      },
      {
        test : /\.css$/,
        loader : ExtractTextPlugin.extract("style", "css"),
        include : [path.join(__dirname, "node_modules")]
      },
      {
        test : /\.css$/,
        loader : ExtractTextPlugin.extract("style", "css?modules!postcss"),
        include : [path.join(__dirname, "src")]
      },
      {
        test : /\.scss$/,
        loader : ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test : /\.less$/,
        loader : ExtractTextPlugin.extract("style", "css!less")
      },
      {
        test : /\.html$/,
        loader : "html"
      },
      {
        test : /\.(png|gif|jpe?g)$/i,
        loader : "url?limit=10000"
      },
      {
        test : /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader : "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader : "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader : "file"
      },
      {
        test : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader : "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },

  postcss() {

    return [autoprefixer]

  }

}
