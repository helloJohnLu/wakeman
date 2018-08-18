var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

var CSS = 'public/css/';
var JS = 'public/js/';

// 压缩 CSS 文件
gulp.task('minifycss', function() {
    return gulp.src('public/css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest(CSS));
});
// 压缩 JS 文件
gulp.task('minify', function() {
    return gulp.src('public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(JS));
});


var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 监视文件改动并重新载入
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['*.html', 'public/css/*.css', 'public/js/*.js', 'public/images/**/*.+(jpg  png)'], {cwd: './'}, reload);
});
