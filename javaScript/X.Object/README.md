# Object

ECMA-262 5판의 Object를 설명한다.

<br/>

#### sample1
```javascript
//생성자를 통한 객체 선언
var person1 = new Object();

person1.name	= "짱구";
person1.age 	= 5;
person1.hobby 	= function(){
	console.log("액션가면 보기");
}

//리터럴 객체 표기법
var person2 = {
	name	: "유리",
	age		: 5,
	hobby	: function(){
		console.log("리얼 소꿉놀이 하기");
	}
};
```
sample1은 자바스크립트에서 객체를 생성하는 방법이다.

객체는 프로퍼티와 메서드를 갖는다.

프로퍼티는 자바스크립트 엔진 내부에서 구현된 속성을 갖는다.

속성은 [[Enumerable]]처럼 대괄호로 감싸여 내부속성임을 표시한다.

프로퍼티에는 **데이터 프로퍼티**와 **접근자 프로퍼티** 두 가지가 있다.

<br/><br/>

## 데이터 프로퍼티

#### sample2
```javascript
var person1 = {
	name: "짱구"
};

Object.defineProperty(person1, "age", {
	value			: 5,
	configurable	: false
});

console.log(person1); //Object {name: "짱구", age: 5}

delete person1.name; //true
console.log(person1); //Object {age: 5}

delete person1.age; //false
console.log(person1); //Object {age: 5}

person1.age = 6;
console.log(person1); //Object {age: 5}

//error 발생
Object.defineProperty(person1, "age", {
	configurable	: true
});

```
sample2는 Object의 defineProperty 메서드를 이용하여 객체 프로퍼티를 정의한다.

이때 매개값으로 

첫번째인자는 대상 객체, 

두번째인자는 정의할 프로퍼티 이름,

세번째인자는 그 프로퍼티의 속성이다.

프로퍼티 속성의 value는 말 그대로 value임을 나타내고,

configurable은 프로퍼티 속성의 변경 가능 여부를 의미한다.

configurable을 false로 할당하면,

프로퍼티를 삭제할 수 없으며, 

해당 프로퍼티 속성을 재정의할 수도 없다.

우리가 평소 사용하던 객체 선언방식에선 이 값이 자동으로 true로 할당이 된다.

<br/><br/>

#### sample3
```javascript
var person1 = {
	name	: "짱구",
	job		: "유치원생"
};

Object.defineProperty(person1, "age", {
	value		: 5,
	enumerable	: false
});

//객체의 프로퍼티 명을 배열로 반환하는 메서드
Object.keys(person1); //["name", "job"]

for(var key in person1){
	console.log(key);
}
//name
//job

//프로퍼티 속성 재정의
Object.defineProperty(person1, "age", {
	enumerable	: true
});

Object.keys(person1); //["name", "job", "age"]

```
sample3은 Object의 defineProperty 메서드를 이용하고, 

enumerable속성을 false로 할당한다. (기본값: true)

enumerable은 for-in문이나 key를 반환하는 메서드에서 해당 프러퍼티를 제외시킨다.

age프로퍼티를 정의할 때, configurable속성을 정의하지 않았음으로 

기본값인 true가 할당되어 age프로퍼티 속성을 재정의할 수 있다.

enumerable속성을 true로 재정의하면, keys메서드에서 age프로퍼티를 인식하게 된다.

<br/><br/>

#### sample4
```javascript
var person1 = {
	name	: "짱구",
	job		: "유치원생"
};

Object.defineProperty(person1, "age", {
	value		: 5,
	writable	: false
});

console.log(person1); //Object {name: "짱구", job: "유치원생", age: 5}

person1.age = 6;
console.log(person1); //Object {name: "짱구", job: "유치원생", age: 5}

//프로퍼티 속성 재정의
Object.defineProperty(person1, "age", {
	writable	: true
});

person1.age = 6;
console.log(person1); //Object {name: "짱구", job: "유치원생", age: 6}

```
sample4는 writable 속성을 false로 할당한다. (기본값: true)

writable속성은 할당된 값의 변경가능 여부이다.

<br/><br/>

###TODO 

-접근자 프로퍼티

-다중 프로퍼티 정의

-프로퍼티 속성 읽기

<br/><br/>

#### 이전편 
--

#### 다음편
--

<br/>
<br/>
<br/>
<br/>