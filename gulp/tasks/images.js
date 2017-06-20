const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('img', () => {
    gulp.src('./gulp/src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./src/main/webapp/resources/img'));
});
