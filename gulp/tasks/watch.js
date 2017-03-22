const gulp = require('gulp');

gulp.task('watch', () => {
	gulp.watch('./gulp/src/js/**', ['js']);
	gulp.watch('./gulp/src/css/**', ['css']);
	gulp.watch('./gulp/src/img/**', ['img']);
});
