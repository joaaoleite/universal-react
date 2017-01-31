
const gulp	= require('gulp')
const run	= require('gulp-run')
const less 	= require('gulp-less')

const dist = './dist/'

gulp.task('js',()=>{
	return run('NODE_ENV=production webpack -p')
		.exec('', ()=>{
			gulp.src('gulpfile.js')
		})
})
gulp.task('css', ()=>{
    return gulp.src('app/www/css/style.less')
	    .pipe(less())
	    	.pipe(gulp.dest(dist+'css'))
})
gulp.task('assets', ()=>{
        return gulp.src("app/www/images/*.*")
        .pipe(gulp.dest(dist+'images'))
})
gulp.task('html', ()=>{
    return gulp.src('app/www/*.html')
        .pipe(gulp.dest(dist))
})

gulp.task('default',['html','js','css','assets'])
