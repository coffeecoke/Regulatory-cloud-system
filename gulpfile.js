var gulp = require('gulp');
var $ = require('gulp-load-plugins')({rename: {'gulp-rev-append': 'rev'}});
var pkg = require('./package.json');
var AUTOPREFIXER_BROWSERS = ["Android >= 4", "Explorer >= 10", "iOS >= 6"];
//注释信息
var banner = '/*! <%= pkg.title %> v<%= pkg.version %> by YDCSS (c) ' +
    $.util.date(Date.now(), 'UTC:yyyy') + ' Licensed <%= pkg.license %>' + ' */ \n';

gulp.task('less', function () {
    gulp.src(['src/less/*.less'])
        .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS, cascade: false
        }))
        .pipe(gulp.dest("src/css"))
        .pipe($.livereload());
});

gulp.task('watch', function () {
    $.livereload.listen();
    gulp.watch('src/less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);
