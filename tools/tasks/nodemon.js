var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

/**
 * Run the server with nodemon, watching server directory
 */
gulp.task('nodemon', function() {
  var args = [];
  args.push('--client');
  if (process.env.NODE_ENV === 'production') {
    args.push('--prod');
  }
  if (process.argv.indexOf('--api') > -1) {
    args.push('--api');
  }
  if (process.argv.indexOf('--verbose') > -1) {
    args.push('--verbose');
  }
  if (process.argv.indexOf('--show-dock') > -1) {
    args.push('--show-dock');
  }

  return nodemon({
    script: 'server/server.js',
    args: args,
    ext: 'js, json, html',
    watch: ['server'],
    ignore: ['server/api.log.*']
  })
});