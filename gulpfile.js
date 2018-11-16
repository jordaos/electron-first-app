var gulp = require('gulp');
var sass = require('gulp-sass');
var runElectron = require("gulp-run-electron");

gulp.task('default', ['server', 'sass:watch']);

gulp.task('server', function() {
  gulp.src("./")
    .pipe(runElectron([], {cwd: "app"}));
  
  gulp.start('server:watch');
});

gulp.task('server:watch', function() {
  gulp.watch('./app/*', ['server', runElectron.rerun]);
});

gulp.task('sass', function () {
  gulp.src('./app/scss/sb-admin.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['sass']);
});