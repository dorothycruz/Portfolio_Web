var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('default', ['sass'], function () {
    
    browserSync.init({
        server: ".",
        port: 8080
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: require('bourbon').includePaths
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});