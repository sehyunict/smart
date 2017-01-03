# object

**object**는, property(속성)와 value(값)으로 구성되어 있다.

타입에 

자바스크립트에선 코드를 인터프리터가 로드할 때, 변수나 함수의 **선언**을 **스코프**상에서 최상위로 올리는 것을 의미한다.

<br/>

####sample1
```javascript
var person = {
	name: "짱구",
	age: 5,
	"friend-1": "철수",
	"friend-2": "훈이",
	eat: function( food ){
		if( food === "피망" ){
			console.log( "안먹어" );
		}
	}
};
```
함수의 표현식과 선언식은 호이스팅을 제외하곤 다른점이 없다.
<br/><br/>


#### 이전편 
3.function - https://github.com/sehyunict/smart/tree/master/javaScript/3.function

<br/>
<br/>
<br/>
<br/>