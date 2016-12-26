#Java Script Code Convention
(해당문서에 정의되어 있지 않은 사항들은 같은 패키지에 있는 jquery-3.1.1.js의 규칙을 따른다)

####참고자료

1. [jQuery](https://contribute.jquery.org/style-guide/js/)
2. [idiomatic.js](https://github.com/rwaldron/idiomatic.js)
3. [JavaScript The Right Way](http://jstherightway.org/)
<br/><br/><br/><br/>

####Code Convention

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
<br/><br/>

>Bad Examples

```javascript
// , 특수문자 사이 공백없음 & ,앞에 공백존재
var options,name; 
var src , copy , copyIsArray;

// 라인 끝 공백존재, if문과 같은 라인에서 중괄호 시작
if ( typeof target === "boolean" ) 
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
var options,name, src, copy, copyIsArray;

if ( typeof target === "boolean" ) {
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
* 오브젝트 표현식과 배열 표현식은 하나의 속성을 한 줄에 작성한다 (행은 80자를 넘지 않아야하며 100을 초과하지 않는다)
* 표현식이 너무 길어 한 줄에 들어갈 수없는 경우 한 줄에 하나의 속성이나 요소가 있어야하며, 각 줄마다 여는 중괄호와 닫는 중괄호가 있어야한다
* 예약어이거나 특수 문자가 포함 된 경우 속성 이름을 따옴표로 묶어야한다

```javascript
// Good as well
map = {
	ready: 9,
	when: 4,
	"you are": 15
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
* source가 너무 길어 한 라인에 들어 가지 않으면 연산자 마지막에 줄바꿈 한다 (행은 80자를 넘지 않아야하며 100을 초과하지 않는다)

>Bad Examples

```javascript
var html = "<p>The sum of " + a + " and " + b + " plus " + c
	+ " is " + ( a + b + c );
}
```

>Good Examples

```javascript
var html = "<p>The sum of " + a + " and " + b + " plus " + c +
" is " + ( a + b + c );
}
```

* 조건문의 조건이 너무 길어서 한 줄에 들어갈 수없는 경우 연속적인 줄은 본문과 구분하기 위해 한 단계 더 들여 쓰기 한다

```javascript
if ( firstCondition() && secondCondition() &&
		thirdCondition() ) {
	doStuff();
}
```
