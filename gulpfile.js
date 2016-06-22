var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./css/**/.sass')
        .pipe(sass())
        .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
   gulp.watch('./project/**/*.sass')
});