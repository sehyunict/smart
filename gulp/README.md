# gulp.js 사용법
---

#### 1. gulp란?
```
배포툴
```
<br><br>
#### 2. gulp 설치
```
// 1. 전역으로 먼저 설치
$ npm install gulp -g

// 2. 프로젝트에 설치
$ cd 프로젝트경로
$ npm install gulp --save-dev

// 3. 사용할 gulp-plugin 설치
$ npm install gulp-concat --save-dev
```
<br><br>
#### 3. gulpfile.js 작성
```
// 반드시 이름은 gulpfile.js
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
```
<br><br>
#### 4. gulp 실행
```
$ cd 프로젝트경로
$ gulp
```
<br><br>
#### 5. 결과물 확인
```
/dist/SGK.js
/dist/SGK.min.js
```
<br><br>
#### 6. 샘플 확인
```
/sample/browser.html
/sample/node.js
```
