# function

<br/>

#### sample1
```javascript
//함수의 선언
function A( a, b ){
	return a + b;
}
A(1, 2); //3
```
sample1은 함수를 선언한 것이다.
<br/><br/>

#### sample2
```javascript
//함수의 표현
var B = function( a, b ){
	return a + b;
};
B(1, 2); //3
```
sample2는 익명함수릏 변수에 할당한 것이다.
<br/><br/>

#### sample3
```javascript
//생성자에 의한 표현
var C = new Function( "a", "b", "return a + b" );
C(1, 2); //3
```
sample3은 Function 생성자를 통해 새로운 함수를 만들어 내고 변수에 할당한 것이다.

자바스크립트에서 함수를 정의하는 방법은 이렇게 3가지이다.

셋 모두 같은 기능을 하지만, 

C의 경우, 전달하는 매개값을 eval함수로 처리해야됨으로 성능에 영향이 있기 때문에 추천하지 않는다.

C의 예제를 보면 함수를 생성자로 생성이 가능하다는 것인데,

이 것은 함수가 사실 **객체**이고, Function 타입의 **인스턴스**이며, **프로퍼티**와 **메서드**를 갖고 있다는 것을 의미한다.
<br/><br/>

#### sample4
```javascript
function A( param1, param2 ){
	console.log( param1, param2 );
}
A(); //undefined undefined
A("param1"); //"param1" undefined
A("param1", "param2"); //"param1" "param2"
```
sample4는 자바라면 에러를 내뱉겠지만, 자바스크립트에선 허용을 하고 있다.

자바스크립트의 함수는 매개값 전달에 제한이 없다.

따라서 함수에 정의된 매개값 보다 수가 적든 많든 함수는 실행된다.
<br/><br/>

#### sample5
```javascript
function B(){
	console.log( arguments );
}
B( "A", 1, "B", 2 ); //{ 0: "A", 1: 1, 2: "B", 3: 2, length: 4, callee: B }
```
함수 B의 실행 결과를 보면, 객체 하나가 찍힌 것을 볼 수 있다.

#진행중..

<br/><br/>

#### 이전편 
2.scope - https://github.com/sehyunict/smart/tree/master/javaScript/2.scope
#### 다음편
4.hoesting

<br/>
<br/>
<br/>
<br/>