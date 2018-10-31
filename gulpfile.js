// grab our gulp packages
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app/"
});

  gulp.watch("./app/scss/*.scss", ['sass']);
  gulp.watch("./app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("./app/scss/*.scss")
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest("./app/css/"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);