var gulp            = require('gulp');
var runSequence     = require('run-sequence');

var env = process.argv.indexOf('--prod') > -1 ? 'production' : 'development';

require('require-dir')('./tools/tasks');


gulp.task('default', ['start']);


/**
 * Tasks for local development
 */
gulp.task('start', function(done) {
  return runSequence('env:' + env, 'clean', 'copy:assets', 'nodemon', done);
});

/**
 * Tasks to build the client app for deployment
 */
gulp.task('build', function(done) {
  return runSequence('env:' + env, 'clean', 'copy:assets', 'webpack-build', 'inject', done);
});
