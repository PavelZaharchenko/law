const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const pump = require('pump');

gulp.task('less', () => {
    return gulp
        .src('./styles/style.less')
        .pipe(less())
        .pipe(autoprefixer('last 2 version', 'ie 10'))
        .pipe(gulp.dest('./publick/assets/style/'));
});

gulp.task('less:watch', () => {
    gulp.watch('./styles/*.less', ['less']);
});

gulp.task('imagemin', () => {
	return gulp.src('./styles/imgs/*')
	.pipe(imagemin())
	.pipe(gulp.dest("./publick/assets/img"))
});

gulp.task('compress', (cb) => {
  pump([
        gulp.src('./js/app.js'),
        uglify(),
        gulp.dest('publick/assets/js/')
    ],
    cb
  );
});

gulp.task('default', ['less', 'imagemin', 'compress', 'less:watch']);