var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var env = process.argv.indexOf('--prod') > -1 ? 'production' : 'development';
// var env = process.env.NODE_ENV;
var DEBUG = env !== 'production';
var VERBOSE = process.argv.indexOf('--verbose') > -1;
var SHOW_REDUX_DOCK_MONITOR = process.argv.indexOf('--show-dock') > -1;

var AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

var GLOBALS = {
  'process.env.NODE_ENV' : '"' + env + '"',
  'process.env.BROWSER' : true,
  'process.env.SHOW_REDUX_DOCK_MONITOR' : SHOW_REDUX_DOCK_MONITOR
};


// Webpack plugins
var plugins = [
  new webpack.DefinePlugin(GLOBALS),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];
if (!DEBUG) {
  plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: VERBOSE,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  )
}


module.exports = {

  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,

  resolve: {
    root: path.resolve(__dirname, '..'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
    alias: {
    }
  },
  
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './client'
  ],
  
  output: {
    path       : path.join(__dirname, '../.build'),
    filename   : 'app/bundle.js',
    publicPath : '/'
  },

  plugins: plugins,
  
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        loader  : 'babel-loader',
        include: [
          path.resolve(__dirname, '../client'),
        ],
        exclude: /node_modules/,
        query   : {
          cacheDirectory: DEBUG,
          babelrc: false,
          presets: ['react', 'es2015', 'stage-0'],
          plugins : [
            'transform-runtime',
            ['react-transform', {
              transforms: [
                {
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module'],
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react'],
                },
              ],
            }
            ],
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?' + JSON.stringify({ sourceMap: DEBUG, minimize: !DEBUG }),
          'postcss-loader?pack=default',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?' + JSON.stringify({ sourceMap: DEBUG, minimize: !DEBUG }),
          'postcss-loader?pack=sass',
          'sass-loader' + (DEBUG ? '?sourceMap' : ''),
        ],
      },
    ]
  },

  postcss: function (bundler) {
    return {
      default: [
        require('postcss-import')({addDependencyTo: bundler}),
        autoprefixer({browsers: AUTOPREFIXER_BROWSERS})
      ],
      sass: [
        autoprefixer({browsers: AUTOPREFIXER_BROWSERS}),
      ]
    };
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: VERBOSE,
    assets: true,
    errorDetails: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE
  }

};
