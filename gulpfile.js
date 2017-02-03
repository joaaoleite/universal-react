
const gulp 		= require('gulp')
const less 		= require('gulp-less')
const cleanCSS  = require('gulp-clean-css')
const reload	= require('gulp-livereload')
const run		= require('gulp-run')

const dist = './dist/'

gulp.task('css', ()=>{
    return gulp.src('app/www/css/style.less')
        .pipe(less())
		.pipe(gulp.dest(dist+'css'))
		.pipe(reload())
})
gulp.task('js',()=>{
	return run('webpack -p')
		.exec('', ()=>{
			gulp.src('gulpfile.js').pipe(reload())
		})
})
gulp.task('html', ()=>{
    return gulp.src('app/www/*.html')
        .pipe(gulp.dest(dist))
		.pipe(reload())
})
gulp.task('images', ()=>{
	return gulp.src("app/www/images/*.*")
        .pipe(gulp.dest(dist+'images'))
		.pipe(reload())
})
gulp.task('favicon', ()=>{
	return gulp.src("app/www/images/favicon.*")
        .pipe(gulp.dest(dist))
		.pipe(reload())
})


gulp.task('vendor',()=>{

	run('webpack --config webpack.dll.js').exec()

	gulp.src('app/www/css/vendor.less')
        .pipe(less())
		.pipe(cleanCSS({compatibility:'ie8'}))
		.pipe(gulp.dest(dist+'css'))

	gulp.src('semantic/src/themes/default/assets/fonts/*')
		.pipe(gulp.dest(dist+'fonts/'))
})

gulp.task('default',['css','js','html','images','favicon'])

gulp.task('watch',()=>{
	reload.listen()
     gulp.watch('app/www/view.html', 		['html']) 
     gulp.watch('app/www/css/style.less', 	['css']) 
     gulp.watch('app/**/*.js', 				['js']) 
     gulp.watch('app/www/images/*.*', 		['images','favicon']) 
})
