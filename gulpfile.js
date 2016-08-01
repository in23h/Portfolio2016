var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/portfolio2016/js/**/*');
});

gulp.task('html', function() {
  gulp.src('builds/portfolio2016/*.html');
});

gulp.task('css', function() {
  gulp.src('builds/portfolio2016/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('builds/portfolio2016/js/**/*', ['js']);
  gulp.watch('builds/portfolio2016/css/*.css', ['css']);
  gulp.watch(['builds/portfolio2016/*.html',
    'builds/portfolio2016/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/portfolio2016/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
