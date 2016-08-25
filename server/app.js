var express = require('express');
var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var compression = require('compression');
var _ = require('lodash');
var logger = require('./logger');

var app = express();
// compress all response
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(bodyParser.json({limit : '100kb'})); // limit json payload limit so we can't be overloaded by a malicious user

app.use(morgan('dev'));

var serveClient = process.argv.indexOf('--client') > -1;
var apiOnly = process.argv.indexOf('--api') > -1;

// Routes
var routes = require('./routes');

app.use('/api/ping', routes.ping);

// Use express to serve the static file
if (serveClient && !apiOnly) {
  // Set up webpack-dev-middleware and webpack-hot-middleware
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackConfig = require('../tools/webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    stats: webpackConfig.stats
  }));
  app.use(webpackHotMiddleware(compiler));

  // serve static files for client app
  app.use(express.static(__dirname + '/../.build'));

  // serve index.html for client app page view request
  app.all('*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + '/../.build/' });
  });
}


// global error handling - SHOULD ALWAYS BE THE LAST middleware function in this file
app.use(function(err, req, res, next) {
  logger.error('uncaught error', err);
  res.status(500).json({error: 'uncaught error'});
});

module.exports = app;