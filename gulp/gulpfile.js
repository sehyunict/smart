// plugins
var gulp = require('gulp');
var concat = require('gulp-concat'); // 파일 합치기
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify'); // 파일 압축
var minifyhtml = require('gulp-minify-html');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('min', function(){
	
	return gulp.src([
		'./build/start.js',
		'./src/SGK/SGK.js',
		'./src/SGK/SGK.Object.js',
		'./src/SGK/SGK.Rect.js',
		'./build/end.js'
	])	.pipe( concat('SGK.min.js') )
		.pipe( uglify() )
		.pipe( gulp.dest('./dist') );
	
});

gulp.task('default', ['min'], function(){
	
	return gulp.src([
		'./build/start.js',
		'./src/SGK/SGK.js',
		'./src/SGK/SGK.Object.js',
		'./src/SGK/SGK.Rect.js',
		'./build/end.js'
	])	.pipe( concat('SGK.js') )
		.pipe( gulp.dest('./dist') );
	
});