const gulp = require('gulp')
const browsersync = require('browser-sync')

gulp.task('browsersync', () => {
	browsersync.init({
		proxy: 'localhost:8088'
	})
})
