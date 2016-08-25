var gulp = require('gulp');

/**
 * Copy static assets files to .build directory (index.html, js and css, images and icons, etc.)
 */
gulp.task('copy:assets', function() {
  return gulp.src('client/assets/**', { base: 'client/assets' })
    .pipe(gulp.dest('.build'));
});