var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');

var paths = {
	sass : [ './scss/**/*.scss', "./www/js/**/*.js" ],
	templates : [ './www/templates/**/*.html' ],
	js_src : "./www/js/src/",
	js_output : "./www/js/"
};

gulp.task('default', [ 'sass','templates',  'scripts' ]);

gulp.task('sass', function(done) {
	gulp.src('./scss/ionic.app.scss').pipe(sass()).pipe(gulp.dest('./www/css/')).pipe(minifyCss({
		keepSpecialComments : 0
	})).pipe(rename({
		extname : '.min.css'
	})).pipe(gulp.dest('./www/css/')).on('end', done);
});

gulp.task('templates', function () {
    gulp.src(paths.templates)
        .pipe(templateCache('templates.js', { module:'templatescache', standalone:true }))
        .pipe(gulp.dest(paths.js_src));
});

gulp.task('scripts', function() {
	gulp.src([  
	           paths.js_src + 'jquery/jquery-2.1.3.min.js',
	           paths.js_src + 'jquery/fastclick.js',
	           paths.js_src + 'utils/*.js',
	           paths.js_src + 'angular/*.js',
	           paths.js_src + 'app.js', 
	           paths.js_src + 'controllers/**/*.js',
	           paths.js_src + 'services/**/*.js',
	           paths.js_src + 'templates.js']).pipe(concat('app.js')).pipe(gulp.dest("./www/js/"));
});
//.pipe(uglify()).pipe(rename("app.min.js")).pipe(gulp.dest('./www/js/'))

gulp.task('watch', function() {
	gulp.watch([paths.sass, paths.templates], [ 'sass', 'templates','scripts' ]);
});

gulp.task('install', [ 'git-check' ], function() {
	return bower.commands.install().on('log', function(data) {
		gutil.log('bower', gutil.colors.cyan(data.id), data.message);
	});
});

gulp.task('git-check', function(done) {
	if (!sh.which('git')) {
		console.log('  ' + gutil.colors.red('Git is not installed.'), '\n  Git, the version control system, is required to download Ionic.', '\n  Download git here:', gutil.colors
			.cyan('http://git-scm.com/downloads')
			+ '.', '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.');
		process.exit(1);
	}
	done();
});