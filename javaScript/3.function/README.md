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
function person(name, age){
	console.log( name, age ); //홍길동 45
	name = "cmd[var]";
	console.log( arguments[0], arguments[1] ); //cmd[var] 45
	arguments[0] = "cmd[args]";
	console.log( name, age ); //cmd[args] 45
}
person("홍길동", 45);
```
함수에 전달받은 매개값을 변경했을 때, arguments 객체의 값도 변경된다.

arguments 객체의 값을 변경했을 때, 함수에 전달받은 매개값도 변경된다.

전달받은 매개값은 arguments의 속성 값으로 들어가기 때문에 같은 참조를 갖게 된다.

<br/><br/>

####sample7
```javascript
var no = 0; // 이 코드는 사실 window.no = 0; 과 같다.
console.log( no ); // 0
console.log( window.no ); // 0

no = -1; // window.no를 -1로 변경.
console.log( no ); // -1
console.log( window.no ); // -1

// no를 변경했지만, window.no가 변경.
```
javascript에선 각 스코프 별로 변수를 관리하는 객체를 갖는다.

전역 스코프에선 window가 변수관리 객체이고,

로컬 스코프(함수)에선 arguments가 변수관리 객체이다.



####sample8
```javascript
function whoIsMe(){
	console.log(this);
}
whoIsMe(); // window

var person = { whoIsMe: whoIsMe };
person.whoIsMe(); // Object { __proto__: Object, whoIsMe: whoIsMe }

new whoIsMe(); // whoIsMe { __proto__: Object }
```


#진행중..

<br/><br/>

#### 이전편 
2.scope - https://github.com/sehyunict/smart/tree/master/javaScript/2.scope
#### 다음편
4.context

<br/>
<br/>
<br/>
<br/>