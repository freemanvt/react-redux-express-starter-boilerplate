var gulp = require('gulp');

// Set NODE_ENV to 'development'
gulp.task('env:development', function() {
  process.env.NODE_ENV = 'development';
});

// Set NODE_ENV to 'production'
gulp.task('env:production', function() {
  process.env.NODE_ENV = 'production';
});


