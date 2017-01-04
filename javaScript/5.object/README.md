# object

**object**는 property(속성)와 value(값)으로 구성되어 있다.

특별한 순서가 없으며, 값에 타입이 정해져 있지 않다. 

값이 함수이면, **method**라고 부르고, 

그 외(string, number, boolean, object)는 **property**라고 부른다. 

<br/>

####sample1
```javascript
// 리터럴 객체
var dog = {
	name: "개",
	feed: "사료",
	eat: function(){
		console.log( this.name + "는 " + this.feed + "를 먹는다." );		
	}
};
```
객체는 줄괄호를 이용하여 생성할 수 있다.

이를 보통 리터럴 객체라 칭한다.

프로그램에서 요구되는 단일 객체는 리터럴 표현식을 사용하는 경우가 많다.
<br/><br/>

####sample2
```javascript
var dog = {
	name: "개",
	feed: "사료",
	eat: function(){
		console.log( this.name + "는 " + this.feed + "를 먹는다." );
	}
};

var cat = {
	name: "고양이",
	feed: "통조림",
	eat: function(){
		console.log( this.name + "는 " + this.feed + "를 먹는다." );		
	}
};

// ... 동물들이 더 많다면???
```
sample2는 리터럴 표현법으로 객체를 생성했다.

만약 동물의 수가 많아지면, 코드의 양이 점점 많아질 것이다.

같은 속성의 객체를 여럿 만들려면, 리터럴 형식 보단 생성자 함수를 이용하는 편이 더 좋다.
<br/><br/>

####sample3
```javascript
// 생성자에 의한 생성
var dog = new Object();

console.log( Object ); // function Object() { [native code] };
console.log( dog ); // Object {}

dog.name = "개";
dog["feed"] = "사료";
dog.eat = function(){
	console.log( this.name + "는 " + this.feed + "를 먹는다." );
}
```
객체는 new 명령어를 통해 생성할 수 있다.

이를 생성자 함수에 의한 객체 생성이라 부른다.

생성자 함수란, 특정 타입의 객체(instance)를 만들어주는 함수를 칭한다.

자바스크립트에선 함수의 용도를 따로 구분하지 않으므로, 일반적으로 생성자 함수는 대문자로 표기하여 구분한다.

**new Object()**에서 괄호의 의미는 생성자 함수를 실행하라는 의미임으로 Object가 함수임을 추측할 수 있다.

첫번째 콘솔은 Object가 함수임을 알 수 있고, 여기서 **[native code]**는 자바스크립트 엔진 내장 코드라고 생각하면 된다.

두번째 콘솔에 찍힌 **Object**는 dog란 이름의 객체는 Object의 instance임을 나타낸다.

sample3은 생성자의 이점을 살리지 못한 예이다. 결국 코드의 양이 늘어나는 건 마찬가지이다.

*참고

자바스크립트에선 객체를 먼저 생성하고, 속성과 값을 정의할 수 있다.

**객체.속성명**으로 객체 속성에 접근할 수 있고,

속성에 접근할 때, 문법적인 오류는 **객체["속성명"]**을 사용하면 회피할 수 있다.
<br/><br/>

####sample4
```javascript
// 동물 생성자 함수
function Animal ( name, feed ) {
	this.name = name;
	this.feed = feed;
	this.eat = function(){
		console.log( this.name + "는 " + this.feed + "를 먹는다." );
	}
}

// 개
var dog = new Animal( "개", "사료" );
console.log( dog ); // Animal {name: "개", feed: "사료"}
console.log( dog.eat() ); // 개는 사료를 먹는다.

// 고양이
var cat = new Animal( "고양이", "통조림" );
console.log( cat ); // Animal {name: "고양이", feed: "통조림"}
console.log( cat.eat() ); // 고양이는 통조림을 먹는다.

```
sample4는 생성자 함수를 직접 구현한 것이다.

생성자 함수를 직접 구현함으로써 매번 속성과 값을 추가하지 않아도 

다양한 종류의 동물 객체를 라인 하나로 만들 수 있다.
<br/><br/>
<br/>

#### 이전편 
4.hoisting - https://github.com/sehyunict/smart/tree/master/javaScript/4.hoisting

#### 다음편
6.prototype - https://github.com/sehyunict/smart/tree/master/javaScript/6.prototype

<br/>
<br/>
<br/>
<br/>