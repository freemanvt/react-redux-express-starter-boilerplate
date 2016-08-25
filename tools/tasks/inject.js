var gulp = require('gulp');
var inject = require('gulp-inject');

/**
 * Inject compiled bundle js and css files to index.html
 */
gulp.task('inject', function() {
  var target = gulp.src('.build/index.html');
  var sources = gulp.src(['.build/app/*.js', '.build/app/*.css'], { read: false });

  return target.pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest('.build'));
});