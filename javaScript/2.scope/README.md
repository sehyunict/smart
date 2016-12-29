# scope

<br/>
####사전적 의미 : 범위, 영역
####프로그램적 의미 : 변수의 유효범위
ECMA스크립트에서는 scope를 실행 컨텍스트(EC)라고 부른다.
<br/><br/>

####sample1
```javascript
function test(){
	for(var i=0; i<10; i++){
		var number = i;
	}
	console.log( number ); //9
}
test();
```
자바스크립트를 처음 접하면 혼란스러운 코드다.

number란 변수는 for문안에 선언되었는데, 콘솔에 표시되고 있다. 
<br/><br/>

####sample2
```javascript
function test(){
	if( true ){
		var animal = "사자";
	}
	console.log( animal ); //"사자"
}
test();
```
마찬가지로 if문안에 선언된 animal 변수가 콘솔에 표시되고 있다.
<br/><br/>

####sample3
```javascript
function setAnimal(){
	//함수 내 var를 선언한 변수
	var animal = "고앙이";
	console.log( animal );
}
setAnimal(); //"고양이"
console.log( animal ); //에러 발생
```
1장에서 봤던 동일한 코드이다.

var를 선언한 변수는 함수 내에서만 유효하다고 1장에서 설명하고 있다.

sample1, sample2 코드는 가능하며, sample3 코드는 불가능하다.

 이것은 자바스크립트에서 변수의 유효범위는 블럭 단위가 아니라 함수 단위임을 의미한다.
<br/><br/>

####sample4
```java
public static void main(String[] args) {
	if( true ){
		String animal = "사자";
	}
	System.out.println( animal ); //에러 발생
}
```
자바에서 변수의 유효범위는 블럭 단위이므로 에러가 발생한다.

자바와 자바스크립트의 스코프가 다르므로 코딩을 할 때, 혼선이 생길 수 있다.
<br/><br/>

####sample5
```javascript
var worldObj = "world";
console.log( window );
function localScope(){
	console.log( arguments );
}
localScope("local");
```
각 스코프에는 변수객체(VO)와 연결되어 있다.

스코프에 정의된 변수나 함수들은 모두 이 변수객체에 담기게 된다.
 
전역 스코프의 변수객체는 window가 되는 것이고,

로컬 스코프의 변수객체는 arguments가 된다.
<br/><br/>

####sample6
```javascript
var v0 = "v0";
function scope1(){
	var v1 = "v1"; 
	function scope2(){
		var v2 = "v2";
		function scope3(){
			var v3 = "v3";
			function scope4(){
				var v4 = "v4";
			}
			scope4();
		}
		scope3();
	}
	scope2();
}
scope1();
```
스코프 체인은 스코프가 사용할 수 있는 변수와 함수의 순서를 정의한 것이다.

- scope4의 scope 체인

[scope4의 arguments, scope3의 arguments, scope2의 arguments, scope1의 arguments, window]
<br>

1. scope4에서 변수를 사용하면, 첫번째로 자신의 VO를 검색해본다.

2. 자신의 VO에 선언되어있으면, 바로 사용하고 아니면 scope3의 VO를 검색한다.

3. 이를 반복하여 마지막에는 전역 VO를 검색하고, 그 변수가 전역에도 선언되지 않았다면 에러를 발생시킨다.
<br/><br/>
<br/>

#### 이전편 
1.var - https://github.com/sehyunict/smart/tree/master/javaScript/1.var
#### 다음편
3.function - https://github.com/sehyunict/smart/tree/master/javaScript/3.function

<br/>
<br/>
<br/>
<br/>