var gulp = require('gulp');
var del = require('del');

/**
 * Clean the .build directory before executing other tasks
 */
gulp.task('clean', function() {
  return del.sync(['.build/**', '!.build', '!.build/.gitkeep']);
});


