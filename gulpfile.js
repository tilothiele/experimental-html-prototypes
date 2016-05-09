var gulp = require('gulp');
var pug = require('gulp-pug');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var convertEncoding = require('gulp-convert-encoding');
 
gulp.task('styles', function(){
  return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dest'))
});

gulp.task('views', function build() {
  var options = {
    pretty: true,
    data: {
      foo: 'bar'
    }
  };
  return gulp.src('src/views/**.pug')
//    .pipe(convertEncoding({from: 'utf-8', to: 'iso-8859-1'}))
    .pipe(pug(options))
    .pipe(gulp.dest('dest'));
});

gulp.task('copy1', function () {
    return gulp.src('node_modules/bootstrap/dist/**/*')
      .pipe(gulp.dest('dest'));
});

gulp.task('copy2', function () {
    return gulp.src('node_modules/jquery/dist/**/*')
      .pipe(gulp.dest('dest/js'));
});

gulp.task('copy3', function () {
    return gulp.src('src/img/**/*')
      .pipe(gulp.dest('dest/img'));
});

gulp.task('default', function(callback) {
  runSequence(['views', 'styles'], 'copy1', 'copy2', 'copy3', callback);
});