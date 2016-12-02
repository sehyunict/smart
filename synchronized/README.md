# synchronized 동작 테스트

<br/>

### Test.java
```java
import java.util.ArrayList;
import java.util.List;

public class Test implements Runnable {

	//공통 리스트 [A, B, C, D, E]
	final static List<String> COMM_LIST = new ArrayList<String>();
	
	//Test 객체 리스트
	private List<Integer> numList;
	
	Test(List<Integer> _numList){
		this.numList = _numList;
	}
	
	//동작
	@Override
	public void run() {
		for (int i = 0; i < this.numList.size(); i++) {
			print(this.numList.get(i));
		}
	}
	
	public static void main(String[] args) {
		
		List<Integer> plus = new ArrayList<Integer>();
		List<Integer> minus = new ArrayList<Integer>();
		
		for (int i = 0; i < 500000; i++) {
			plus.add(i);
			minus.add(-i);
		}
		
		Thread plusTh = new Thread(new Test(plus));
		Thread minusTh = new Thread(new Test(minus));
		
		COMM_LIST.add("A");
		COMM_LIST.add("B");
		COMM_LIST.add("C");
		COMM_LIST.add("D");
		COMM_LIST.add("E");
		
		plusTh.start();
		minusTh.start();
		
	}
	
	public static  /*synchronized*/  void print(Integer num){
    	for(int i=0; i<COMM_LIST.size(); i++){
    		System.out.println(num + "___" + COMM_LIST.get(i));
    	}
    }

}
```

<br/>

### synchronized를 사용했을 때
- 데이터가 전부 찍힌다.
- Thread의 실행이 변경될 때, 현재 작업중인 Thread는 반드시 E를 표시하고 일시중지된다.

<br/>

### synchronized를 사용하지 않을 때
- 데이터가 전부 찍힌다.
- Thread의 실행이 변경될 때, 현재 작업중인 Thread는 E를 표시하지 못해도 바로 일시중지된다.
- 다시 Thread의 실행이 변경될 때, 자신이 표시했던 알파벳 다음부터 표시한다.

<br/>
<br/>