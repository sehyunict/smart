# function

<br/>

####sample1
```javascript
//함수의 선언
function A( a, b ){
	return a + b;
}
A(1, 2); //3
```
sample1은 함수를 선언한 것이다.
<br/><br/>

####sample2
```javascript
//함수의 표현
var B = function( a, b ){
	return a + b;
};
B(1, 2); //3
```
sample2는 익명함수를 변수에 할당한 것이다.
<br/><br/>

####sample3
```javascript
//생성자에 의한 표현
var C = new Function( "a", "b", "return a + b" );
C(1, 2); //3

console.log( C.prototype );//C는 함수이면서 속성값이 존재한다.
```
sample3은 Function 생성자를 통해 새로운 함수를 만들어 내고 변수에 할당한 것이다.

자바스크립트에서 함수를 정의하는 방법은 이렇게 3가지이다.

셋 모두 같은 기능을 하지만, 

C의 경우, 전달하는 매개값을 eval함수로 처리해야됨으로 성능에 영향이 있기 때문에 추천하지 않는다.

C의 예제를 보면 함수를 생성자로 생성이 가능하다는 것인데,

이 것은 함수가 사실 **객체**이고, Function 타입의 **인스턴스**이며, **프로퍼티**와 **메서드**를 갖고 있다는 것을 의미한다.

함수는 객체이므로 C에 prototype이란 프로퍼티에 접근이 가능하다.
<br/><br/>

####sample4
```javascript
function A( param1, param2 ){
	console.log( param1, param2 );
}
A(); //undefined undefined
A("param1"); //"param1" undefined
A("param1", "param2"); //"param1" "param2"
A("param1", "param2", "param3"); // "param1" "param2"
```
sample4는 자바라면 에러를 내뱉겠지만, 자바스크립트에선 허용을 하고 있다.

자바스크립트의 함수는 매개값 전달에 제한이 없다.

따라서 함수에 정의된 매개값 보다 수가 적든 많든 함수는 실행된다.
<br/><br/>

####sample5
```javascript
function B(){
	console.log( arguments );
}
B( "A", 1, "B", 2 ); //{ 0: "A", 1: 1, 2: "B", 3: 2, length: 4, callee: B }
```
함수 B의 실행 결과를 보면, 객체 하나가 찍힌 것을 볼 수 있다.

함수는 내부적으로 arguments와 this라는 값을 갖고 있다.

arguments는 Array객체와 비슷한 구조이지만, 다른 객체이므로 Array의 메서드를 사용할 수 없다.

arguments의 callee 속성은 arguments 객체를 생성한 함수의 참조 이다.

※ callee를 사용하면 이름이 같은 함수가 여럿이더라도 호출했던 함수의 참조를 알아낼 수 있다. 
<br/><br/>

####sample6
```javascript
function whoIsMe(){
	console.log(this);
}
whoIsMe(); // window

var person = { whoIsMe: whoIsMe };
person.whoIsMe(); // Object { __proto__: Object, whoIsMe: whoIsMe }

new whoIsMe(); // whoIsMe { __proto__: Object } -> 여기서 Object는 whoIsMe.prototype과 같다.
```
함수 whoIsMe에 this를 찍어봤다.

함수가 일반적으로 호출될 때, this는 whoIsMe함수를 프로퍼티로 갖고있는 객체가 된다.

전역에서 실행하게되면, whoIsMe란 함수는 window의 프로퍼티이므로, window가 찍히고,

person 객체의 속성값으로 넣으면, person 객체의 프로퍼티이므로, person객체 자체가 찍힌다.
  
함수가 생성자로 호출될 때, this는 새로운 객체(new Object)가 할당된다.
<br/><br/>
<br/>

#### 이전편 
2.scope - https://github.com/sehyunict/smart/tree/master/javaScript/2.scope
#### 다음편
4.hoisting - https://github.com/sehyunict/smart/tree/master/javaScript/4.hoisting

<br/>
<br/>
<br/>
<br/>