const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
//compile
function style()
{
    //css file location
    return gulp.src('./scss/**/*.scss')
    //pass that file through compiler
    .pipe(sass())
    //save css file location
    .pipe(gulp.dest('./css'))
    //stream changes to all browsers
    .pipe(browserSync.stream());

}
function watch()
{
    browserSync.init({
        server: 
        {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
}
exports.style =  style;
exports.watch = watch;

