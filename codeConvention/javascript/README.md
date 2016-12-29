#Java Script Code Convention
(해당문서에 정의되어 있지 않은 사항들은 같은 패키지에 있는 jquery-3.1.1.js의 규칙을 따른다)

####참고자료

1. [jQuery](https://contribute.jquery.org/style-guide/js/)
2. [idiomatic.js](https://github.com/rwaldron/idiomatic.js)
3. [JavaScript The Right Way](http://jstherightway.org/)
4. [jsHint](https://github.com/angelozerr/tern.java/wiki/Tern-Linter-ESLint)
<br/><br/><br/><br/>

####Code Convention

####0. 기본사항
* single quotation 사용
<br/>
(jQuery는 double quotation을 사용하므로, jquery-3.1.1.js의 convention 참조시 single quotation으로 바꾸어 적용)

####1. space (공백)
* 탭으로 들여 쓰기 (1 tab = 4space로 제한)
* 줄 끝이나 빈 줄에 공백 제거
<br/>
	**예외1)** 행에 긴 URL이 포함 된 주석이있는 경우
<br/>
	**예외2)** 행에 정규식 리터럴이 포함되어있는 경우
<br/>
* if/ else/ for/ while/ try 사용 시 중괄호를 항상 같은 라인에 작성
* 단항 특수 문자, 연산자와 피연산자 사이의 공백을 1칸으로 작성
* ?과 :의 삼항 조건은 양쪽에 공백을 1칸으로 작성
* 모든 **,  ;  :** object앞에 공백 없음
* 빈 라인은(소스 구분을 위해 개행했을 경우) 공백, tab이 없도록 작성
* if/ else/ for/ while/ try 예약어 사용 시 뒤에 오는 소괄호 사이에 공백을 1칸으로 작성
* 함수 호출시 뒤에오는 소괄호 사이에는 공백 없음
<br/><br/>

>Bad Examples

```javascript
// , 특수문자 사이 공백없음 & ,앞에 공백존재
var options,name; 
var src , copy , copyIsArray;

// 라인 끝 공백존재, if문과 같은 라인에서 중괄호 시작
if ( typeof target === 'boolean' ) 
{
	// tab 들여쓰기
    deep = target;
}
if ( copyIsArray ) {
	copyIsArray = false;
	
	// 삼항연산자 사이에 공백없음
	clone = src && jQuery.isArray( src )?src:[];
} else {
	clone = src && jQuery.isPlainObject( src ) ? src : {};
}
```

>Good Examples

```javascript
var options, name, src, copy, copyIsArray;

if ( typeof target === 'boolean' ) {
	deep = target;
}

if ( copyIsArray ) {
	copyIsArray = false;
	clone = src && jQuery.isArray( src ) ? src : [];
} else {
	clone = src && jQuery.isPlainObject( src ) ? src : {};
}
```

####2. 개체 및 배열 선언
* 오브젝트 표현식과 배열 표현식은 하나의 속성을 한 줄에 작성한다 (행은 80자를 넘지 않도록 한다)
* 표현식이 너무 길어 한 줄에 들어갈 수없는 경우 한 줄에 하나의 속성이나 요소가 있어야한다
* 예약어이거나 특수 문자가 포함 된 경우 속성 이름을 single quotation으로 묶어 선언한다

>Good Examples

```javascript
map = {
	ready: 9,
	when: 4,
	'you are': 15
};

array = [
	9,
	4,
	15
];

array = [
	{
		key: val
	}
];

array = [
	{
		key: val
	},
	{
		key2: val2
	}
];
```

####3. MultiLine
* source가 너무 길어 한 라인에 들어 가지 않으면 연산자 마지막에 줄바꿈 & 들여쓰기 한다
<br>
 (행은 80자를 넘지 않아야하며 100을 초과하지 않는다)

>Bad Examples

```javascript
var html = '<p>The sum of ' + a + ' and ' + b + ' plus ' + c
	+ ' is ' + ( a + b + c );
```

>Good Examples

```javascript
var html = '<p>The sum of ' + a + ' and ' + b + ' plus ' + c +
	' is ' + ( a + b + c );
```
* 삼항 연산자 같은 경우 줄바꿈 할 때 논리단위로 구분하여 줄바꿈 한다

>Bad Examples

```javascript
var baz = firstCondition( foo ) && secondCondition( bar ) 
	? qux( foo, bar ) : foo;
```

>Good Examples

```javascript
var baz = firstCondition( foo ) && secondCondition( bar ) ?
	qux( foo, bar ) :
	foo;
```


* 조건문의 조건이 너무 길어서 한 줄에 들어갈 수없는 경우 연속적인 줄은 본문과 구분하기 위해 한 단계 더 들여 쓰기 한다

>Good Examples

```javascript
if ( firstCondition() && secondCondition() &&
		thirdCondition() ) {
	doStuff();
}
```

* 체인화 메소드 호출의 경우 메서드 호출의 체인이 너무 길어서 한 줄에 들어갈 수 없을 때, 한 줄에 하나의 호출이 있어야하며, 첫 번째 호출은 메서드가 호출되는 객체와는 다른 줄에 있어야합니다. 
<br/>
**메소드가 컨텍스트를 변경하면 추가 수준의 들여 쓰기가 사용되어야 한다**

>Good Examples

```javascript

// 기본
elements.addClass( 'foo' ).children();

// 체인이 길어서 줄바꿈이 필요한경우
elements
	.addClass( 'foo' )
	.children()
		.html( 'hello' ) // 컨텍스트 변경으로 한번더 들여쓰기
	.end()
	.appendTo( 'body' );
```

* 전체 파일이 클로저에 래핑 될 때 클로저의 본문은 들여 쓰이지 않는다

>Good Examples

```javascript
( function( $ ) {

// This doesn't get indented

} )( jQuery );

module.exports = function( grunt ) {

// This doesn't get indented

};
```

####4. 주석
* MultiLine 주석은 함수 및 파일의 헤더에만 사용한다 (/* ~~~ */)
단일행 주석 기호와 주석내용 사에에는 1칸공백

>Good Examples

```javascript
// 변수를 선언
var foo = 0;

/**
	함수를 선언
	함수명은 fnFoo
**/
function foo() {
	var foo2 = 0;
};
```

####5. 변수, 함수 선언
* 변수
<br/>
	- 약어를 사용하지 않으며 기본 camel 형식으로 작성 ex) var notRealFinalNumber = 0;
	<br/>
	- 상수의 경우 snake 형식으로 작성 ex) REAL_FINAL_NUMBER;
	<br/>
	- 변수명에 2개이상의 under bar를 사용하지 않도록 한다
	<br/>
	- 여러개의 변수를 선언해야 할 경우 ,로 연결하여 한 라인에 하나의 변수를 선언한다
	<br/>
	- 작성법
	
>Bad Examples

```javascript
var foo = "";
var bar = "";
var qux;
```

>Good Examples

```javascript
// 여러개의 변수 선언일 경우 한줄당 하나의 변수를 선언한다
var foo = 'bar',
  num = 1,
  undef;

// 리터럴 표기법:
var array = [],
  object = {};
```

* 함수
<br/>
	- Naming 규칙 : 약어를 사용하지 않으며 기본 camel 형식으로 작성
	<br/>
	- 작성법
	
>Good Examples

```javascript
// 가독성이 높아지도록 공백을 추가
for ( i = 0; i < length; i++ ) {
	// 코드
}

for ( prop in object ) {
  // 코드
}

if ( true ) {
  // 코드
} else {
  // 코드
}
```
