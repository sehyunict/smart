# prototype

**prototype**이란,

같은 타입의 객체(instance)끼리 공유하는 객체이다. 

<br/>

####sample1
```javascript
// sample1-1
var str1 = "a_b_c_d_e_f";
var str2 = "1_2_3_4_5_6";

str1.replace === str2.replace; // true
str1.replace === String.prototype.replace // true
str2.replace === String.prototype.replace // true

// sample1-2
console.log( str1.replaceAll ); // undefined
console.log( str2.replaceAll ); // undefined

String.prototype.replaceAll = function( targetStr, replaceStr ){
	return this.replace( new RegExp(targetStr, "g"), replaceStr );
}

console.log( str1.replaceAll("_", "") ); // abcdef
console.log( str2.replaceAll("_", "") ); // 123456
```
sample1-1을 보면 서로 다른 객체의 replace 메서드를 비교하는 것 같지만, 

replace함수는 String.prototype의 속성에 선언된 함수이고, String객체는 따로 replace라는

함수를 선언하지 않아도 String.prototype을 참조하여 사용할 수 있다.

sample1-2에선 동적으로 prototype의 속성을 추가한다. 이렇게 동적으로 추가해도 각 객체는

String.prototype을 참조함으로 replaceAll 메서드를 사용할 수 있다. 
<br/><br/>

####sample2
```javascript
function Person(){
}
Person.prototype.eat = function( food ){
	console.log( food + " 냠냠" );
}

var person1 = new Person();  
console.log( person1.eat( "햄버거" ) ); // 햄버거 냠냠

Person.prototype = {};

var person2 = new Person(); 
console.log( person1.eat( "햄버거" ) ); // 햄버거 냠냠
console.log( person2.eat( "햄버거" ) ); // error 발생
```
sample2는 person2 객체를 생성하기 바로 전에 Person.prototype의 참조를 새로운 객체로 변경한다.

person1은 기존 prototype 객체를 참조함으로 eat함수를 사용할 수 있지만,

person2는 새로운 prototype 객체를 참조함으로 eat함수를 사용할 수 없다.   
<br/><br/>

####sample3
```javascript
var obj = new Object();
console.log( obj ); // Object {__proto__: Object.prototype}
```
객체가 생성되면, 반드시 **__proto__**라는 속성을 갖고 있다.
<br/><br/>

####sample4
```javascript
var person = { name: "짱구" };
console.log( person instanceof Object ); // true
console.log( person.hasOwnProperty( "name" ) ); // true

person.__proto__ === Object.prototype // true

person.__proto__ = null;
console.log( person instanceof Object ); // false
console.log( person.hasOwnProperty( "name" ) ); // error
```
__proto__는 객체가 어떤 함수에 의해 생성되었는지를 의미하며,

객체는 __proto__의 메서드나 프로퍼티에 접근할 수 있다.

**객체의 __proto__는 객체를 만들어 낸 생성자 함수의 prototype과 같다.**
<br/><br/>

####sample5
```javascript
function Animal(){
}
console.log( Animal.prototype );

/** Animal.prototype의 구조 

	Animal.prototype = {
		constructor: Animal,
		__proto__: Object.prototype
	};

*/

Animal.prototype.constructor === Animal // true

```
자바스크립트에서 함수를 정의하면, 자동으로 함수의 **prototype**속성이 선언되고, 객체 하나가 할당 된다.

prototype에는 **constructor**와 **__proto__**라는 속성이 있다.

constructor는 prototype을 속성으로 갖는 함수(Animal)를 가르킨다.
<br/><br/>

####sample6
```javascript
//sample6-1
function Animal ( name, feed ) {
	this.name = name;
	this.feed = feed;
	this.eat = function(){
		console.log( this.name + "는 " + this.feed + "를 먹는다." );
	}
}


//sample6-2
function Animal ( name, feed ) {
	this.name = name;
	this.feed = feed;
	this.eat = animalEat;
}
function animalEat(){
	console.log( this.name + "는 " + this.feed + "를 먹는다." );
}


//sample6-3
function Animal ( name, feed ) {
	this.name = name;
	this.feed = feed;
}
Animal.prototype.eat = function () {
	console.log( this.name + "는 " + this.feed + "를 먹는다." );
}
```
sample6-1은 eat객체를 생성할 때마다 eat함수의 메모리가 할당된다.

sample6-2는 eat함수를 전역에 선언함으로써 메모리를 절약할 수 있다.

sample6-3은 eat함수가 전역에 선언되는 것을 방지할 수 있고, Animal함수로 생성된 객체들은 모두

eat함수를 사용할 수 있다.
<br/><br/>

####sample7
```javascript
function Animal ( name, feed ) {
	this.name = name;
	this.feed = feed;
}
Animal.prototype.eat = function () {
	console.log( this.name + "는 " + this.feed + "를 먹는다." );
}


function CatType ( name, feed ) {
	this.name = name;
	this.feed = feed;
}
CatType.prototype.getFish = function () {
	console.log( "냠냠" );
}
CatType.prototype.__proto__ = Animal.prototype;


var dog = new Animal( "개", "사료" );
var cat = new CatType( "고양이", "통조림" );
var tiger = new CatType( "호랑이", "고기" );


//Object
dog.hasOwnProperty("name"); // true
cat.hasOwnProperty("name"); // true
tiger.hasOwnProperty("name"); // true
dog instanceof Object // true
cat instanceof Object // true
tiger instanceof Object // true 


//Animal
dog.eat(); // 개는 사료를 먹는다.
cat.eat(); // 고양이는 통조림을 먹는다.
tiger.eat(); // 호랑이는 고기를 먹는다.
dog instanceof Animal // true
cat instanceof Animal // true
tiger instanceof Animal // true


//CatType
dog instanceof CatType // false
cat instanceof CatType // true
tiger instanceof CatType // true
dog.getFish(); // error
cat.getFish(); // 냠냠
tiger.getFish(); // 냠냠
```
sample7은 프로토타입 체인을 의미한다.

CatType.prototype.__proto__는 원래 Object.prototype이다.

그래서 CatType은 Object.prototype의 메서드만 사용할 수 있었다. 그런데, 

**CatType.prototype.__proto__ = Animal.prototype;**에 의해

CatType이 Animal.prototype의 메서드를 사용할 수 있게 되었다.

Animal.prototype.__proto__는 변경이 없음으로 Object.prototype과 같고,

Animal은 Object.prototype의 메서드만을 사용할 수 있다.

CatType을 Animal.prototype에 접근할 수 있게 변경했음으로 CatType도 

Object.prototype의 메서드를 사용할 수 있다.
<br/><br/>
<br/>

#### 이전편 
5.object - https://github.com/sehyunict/smart/tree/master/javaScript/5.object

#### 다음편
-

<br/>
<br/>
<br/>
<br/>