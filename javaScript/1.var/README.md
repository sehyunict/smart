# var

<br/>

#### sample1
```javascript
var animal = "사자";
console.log( animal ); //"사자"
```
우리가 사용하는 보통의 변수 선언이다.
<br/><br/>

#### sample2
```javascript
animal = "사자";
console.log( animal ); //"사자"
```
반드시 var 명령어를 붙여야 변수가 선언되는 건 아니다.
<br/><br/>

#### sample3
```javascript
//var를 선언하지 않은 변수
fruit = "사과";
console.log( fruit === window.fruit ); //true

//함수 외 전역에서 선언한 var 변수
var animal = "사자";
console.log( animal === window.aniaml ); //true


function setPerson(){
	//var를 선언하지 않은 변수
	person = "홍길동";	
}
setPerson();
console.log( person ); //"홍길동"
console.log( person === window.person ); //true
```
함수 외 전역에서 선언한 var 변수 혹은 var를 선언하지 않은 변수는 

window 객체의 속성값으로 저장되며 어디서든 접근 가능한 전역 변수가 된다.
<br/><br/>

#### sample4
```javascript
function setPerson(){
	//var를 선언하지 않은 변수
	person = "홍길동";	
}
setPerson();
console.log( person ); //"홍길동"

function setAnimal(){
	//함수 내 var를 선언한 변수
	var animal = "고앙이";
	console.log( animal );
}
setAnimal(); //"고양이"
console.log( animal ); //에러 발생
```
var를 선언한 변수는 그 변수를 감싸고 있는 함수 내에서만 유효하다.

함수 외부에서는 접근이 불가능하다.
<br/><br/>

#### sample5
```javascript
function out(){
	var person = "홍길동";
	function in(){
		console.log( person ); //"홍길동"
	}
	in();
}
out();
```
var를 선언한 변수는 그 변수를 감싸고 있는 함수 내에서만 유효하므로

함수 내 내부함수도 그 변수에 접근할 수 있다.
<br/><br/>

#### sample6
```javascript
function out(){
	var person = "홍길동";
	function in(){
		var person = "임꺽정";
		console.log( person ); //"임꺽정"
	}
	in();
	console.log( person ); //"홍길동"
}
out();
```
내부함수와 외부함수의 변수명이 같을 경우, 내부 변수를 우선으로 한다.

내부 person 변수는 in 함수가 끝나는 시점에서 메모리 정리되고, 

두번째 console에는 "홍길동"이 표시된다.
<br/><br/>
<br/>

#### 다음편 
2.scope - http://git.sehyunict.com:8890/SolutionTF/study/tree/master/javaScript/2.scope

<br/>
<br/>