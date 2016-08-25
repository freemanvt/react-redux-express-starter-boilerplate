var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('webpack-build', function(done) {
  var webpackConfig = require('../webpack-build.config.js');

  var compiler = webpack(webpackConfig);

  compiler.run(function(err, stats) {

    console.log(stats.toString(webpackConfig.stats));

    done();

  });
});