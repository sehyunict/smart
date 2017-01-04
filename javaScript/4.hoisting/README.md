# hoisting

**hoisting**이란, 직역하면 '끌어올림'으로

자바스크립트에선 코드를 인터프리터가 로드할 때, 변수나 함수의 **선언**을 **스코프**상에서 최상위로 올리는 것을 의미한다.

<br/>

####sample1
```javascript
console.log( no1 ); // error 발생
```
no1를 선언하지 않으면 에러가 난다.
<br/><br/>

####sample2
```javascript
var no1;
console.log( no1 ); // undefined
```
no1를 선언하면 undefined가 자동으로 할당된다.
<br/><br/>

####sample3
```javascript
var no1 = 5;
console.log( no1 ); // 5
```
no1를 선언하고 5를 할당하면, 5가 찍힌다.
<br/><br/>

####sample4
```javascript
console.log( no1 ); // undefined
var no1;
```
sample1과 비교해서 보면, error가 발생해야 될 것같지만, 

호이스팅에 의해 no1은 최상위로 선언되어, sample2와 같은 코드가 된다.
<br/><br/>

####sample5
```javascript
console.log( no1 ); // undefined
var no1 = 5;

console.log( no1 ); // 5
```
sample4와 비교해서 보면, 콘솔에 5가 표시되어야 할 것같지만, 

자바스크립트에선 **선언**만 호이스팅되며, 할당은 해당 라인에서 된다.
<br/><br/>

####sample6
```javascript
function person(){
	// ~
}

var person = function(){
	// ~
};
```
함수의 표현식과 선언식은 호이스팅을 제외하곤 다른점이 없다.
<br/><br/>
<br/>

#### 이전편 
3.function - https://github.com/sehyunict/smart/tree/master/javaScript/3.function
#### 다음편
5.object - https://github.com/sehyunict/smart/tree/master/javaScript/5.object

<br/>
<br/>
<br/>
<br/>