
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

gulp.task('default', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([]))
    .pipe(gulp.dest('./assets/styles'));
});
