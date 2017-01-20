# Array.prototype.reduce

reduce는 ECMA-262 5판 이상에서 사용할 수 있다.

reduce의 특징은 순환문의 값을 정의할 수 있다.

reduce를 사용하면, 순환문의 코드가 필요없고, 값을 기억해야할 변수를 선언할 필요가 없어진다.

<br/>

## 사용법
```javascript
Array.prototype.reduce = function( callback, initialValue ){
	// [[native code]]
}
```
**reduce는 첫번째 인자로 사용자 정의 콜백 함수, 두번째 인자로 초기화 변수를 받는다.**

<br/><br/>

####sample1
```javascript
var array	= [ 50, 100, 40, 20, 70, 30 ];

// sample1-1
array.reduce(function( previousValue, currentValue ){

	// 함수의 이해를 돕기위해 두번째 인자부터 설명한다.
	console.log( currentValue );

});
// 100
// 40
// 20
// 70
// 30


// sample1-2
array.reduce(function( previousValue, currentValue ){

	console.log( currentValue );

}, "initialValue");
// 50
// 100
// 40
// 20
// 70
// 30
```
sample1에선 reduce 콜백함수의 두번째 인자를 콘솔로 확인한다.

sample1-1은 reduce함수의 인자로 콜백함수만 넘겼다.

그 결과, 첫번째 콜백함수가 실행될 때, array[1]의 값이 출력된다.

마지막 콜백함수가 실행될 때, array[length-1]의 값이 출력된다.

sample 1-2는 reduce함수에 두번째 인자까지 입력했다.

그 결과, 첫번째 콜백함수가 실행될 때, array[0]의 값이 출력된다.

마지막 콜백함수가 실행될 때, array[length-1]의 값이 출력된다.

즉, **reduce는 두번째 인자값이 있는지 없는지에 따라 순회되는 배열의 시작 인덱스가 달라진다**는 뜻이다.

<br/><br/>

####sample2
```javascript
var array	= [ 50, 100, 40, 20, 70, 30 ];

// sample2-1
array.reduce(function( previousValue ){

	console.log( previousValue );

});
// 50
// undefined
// undefined
// undefined
// undefined


// sample2-2
array.reduce(function( previousValue ){

	console.log( previousValue );

}, "initalValue");
// initialValue
// undefined
// undefined
// undefined
// undefined
// undefined


// sample2-3
var finalResult = array.reduce(function( previousValue, currentValue ){

	console.log( previousValue, currentValue );
	return currentValue;

});
// 50, 100
// 100, 40
// 40, 20
// 20, 70
// 70, 30
console.log( finalResult ); // 30
```
sample2-1에서 첫번째 콜백함수가 실행 될 때, array[0]번째의 값이 출력됐다.

sample2-2에서 reduce의 두번째 인자값을 넣고, 콜백함수가 실행 될 때, reduce의 두번째 인자값이 출력됐다.

이 것은 **reduce의 두번째인자가 없으면, 콜백함수의 첫번째 인자를 array[0]으로 초기화하고,**

**있으면, 그 값으로 초기화 한다**는 뜻이다.

sample2-3의 첫번째 인자 출력결과는 sample2-1의 결과와 다르게 undefined가 출력되지 않았다.

이 것은 return문을 사용해서 그렇다.

**reduce는 콜백함수의 return되는 값을 다음번 콜백함수가 실행될 때, 첫번째 인자로 넣어준다.**

그리고 **reduce의 실행 결과는 마지막 콜백함수의 return 값이 된다.** 

<br/><br/>

####sample3
```javascript
var array	= [ 50, 100, 40, 20, 70, 30 ];

// sample3-1
array.reduce(function( previousValue, currentValue, currentIndex, targetArray ){

	console.log( currentIndex, targetArray );

});
// 1, [50, 100, 40, 20, 70, 30]
// 2, [50, 100, 40, 20, 70, 30]
// 3, [50, 100, 40, 20, 70, 30]
// 4, [50, 100, 40, 20, 70, 30]
// 5, [50, 100, 40, 20, 70, 30]


// sample3-2
array.reduce(function( previousValue, currentValue, currentIndex, targetArray ){

	console.log( currentIndex, targetArray );

}, "initialValue");
// 0, [50, 100, 40, 20, 70, 30]
// 1, [50, 100, 40, 20, 70, 30]
// 2, [50, 100, 40, 20, 70, 30]
// 3, [50, 100, 40, 20, 70, 30]
// 4, [50, 100, 40, 20, 70, 30]
// 5, [50, 100, 40, 20, 70, 30]

```
**reduce 콜백함수의 세번째 인자는 현재 순환 인덱스이다.**

**reduce 콜백함수의 네번째 인자는 reduce함수를 호출한 배열 그 자체(reference)이다.**

<br/><br/>

## 응용법

####sample4
```javascript
var score = [ 50, 100, 40, 20, 70, 30 ];

// 일반적인 방법
function sum( arr ){
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum;
}
console.log( sum(score) ); // 310


// prototype을 이용한 방법
Array.prototype.sum = function(){
	var sum = 0;
	for(var i=0; i<this.length; i++){
		sum += this[i];
	}
	return sum;
}
console.log( score.sum() );


// reduce를 이용한 방법
function sum( prev, curr ){
	return prev + curr;
}
console.log( score.reduce(sum) ); // 310
```
sample4는 배열의 총합을 나타내는 코드들을 나열해봤다.

<br/><br/>

####sample5
```javascript
var matrix2 = [ 
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8]
];

var matrix1 = matrix2.reduce(function( prev, curr ){
	return prev.concat( curr );
});
console.log( matrix1 ); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```
sample5는 2차원 배열을 1차원 배열로 만드는 코드이다.

<br/><br/>

#### 참조
**MDN** - <a>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce</a>

<br/>
<br/>
<br/>
<br/>