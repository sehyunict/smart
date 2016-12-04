# scope

<br/>
사전적 의미 : 범위, 영역
프로그램적 의미 : 변수의 유효범위
<br/><br/>

#### sample1
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

#### sample2
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

#### sample3
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

#### sample4
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
<br/>

#### 이전편 
1.var - https://github.com/sehyunict/smart/tree/master/javaScript/1.var
#### 다음편
3.function - https://github.com/sehyunict/smart/tree/master/javaScript/3.function

<br/>
<br/>
<br/>
<br/>