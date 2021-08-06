const gulp          = require('gulp');
const themeKit = require('@shopify/themekit')
const sass = require('gulp-sass')(require('sass'));

gulp.task( 'sass', function()  {
    return gulp.src('scss/global.scss')
      .pipe(sass())
      .pipe(gulp.dest('assets'))
  });