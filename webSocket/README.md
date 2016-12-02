# java와 tomcat을 이용한 webSocket 예제
<br/>
#### 개발 환경

|        tool       	| version 	|
|:-----------------:	|:-------:	|
|        java       	|   1.8   	|
|   Apache Tomcat   	|   7.0   	|
| Internet Explorer 	|    11   	|
<br/>
#### ChattingServlet.java

```java
package okki.websocket.com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ChattingServlet
 */
@WebServlet("/chatting")
public class ChattingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChattingServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		/* ***********************************************
		 * 주소창: http://localhost:8080/websocket/chatting
		 * serverName: localhost
		 * port: 8080
		 * contextPath: /websocket
		 *************************************************/
		request.setAttribute("serverName", request.getServerName());
		request.setAttribute("serverPort", request.getServerPort());
		request.setAttribute("contextPath", request.getContextPath());
		request.getRequestDispatcher("/WEB-INF/chatting.jsp").forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
```
<br/>
#### webSocket.java

```java
package okki.websocket.com.socket;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

//톰캣 7.0부터 websocket-api.jar가 내포
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

//파일명과 완전히 일치해야 동작
@ServerEndpoint("/webSocket") //requestMapping과 같은 역할
public class webSocket {
	
	//사용자 세션 정보 목록
	private static List<Session> Clients = Collections.synchronizedList(new ArrayList<Session>()); //멀티쓰레드 환경에서 동기화 처리
	
	//클라이언트와 소켓이 연결된 경우
    @OnOpen
    public void connection(Session session){
    	//사용자 세션을 저장
    	Clients.add(session);
    	System.out.println(session.getId());
    }

    //클라이언트로부터 전달 받은 데이터
    @OnMessage
    public /* synchronized */ void receiveData(String data, Session session){
    	try {
	    	for (Session client : Clients) {
					client.getBasicRemote().sendText(data);
			}
    	} catch (IOException e) {
    		e.printStackTrace();
    	}
    }

    //클라이언트와 소켓이 끊긴 경우
    @OnClose
    public void disConnection(Session session){
    	//사용자 세션 정보 제거
    	Clients.remove(session);
    }

    //웹소켓이 에러가 난 경우
    @OnError
    public void handleError(Throwable t){
        t.printStackTrace();
    }
	
}
```
<br/>
#### chatting.jsp

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>간단한 웹소켓 예제</title>
<script type="text/javascript">
function onload(){
	
	//서버와 소켓  연결
	var webSocket = new WebSocket("ws://${serverName}:${serverPort}${contextPath}/webSocket");
	
	
	//input 이벤트
	document.getElementById("input").onkeypress = function(e){
		//enter 키
		if( e.keyCode === 13 ){
			var message = this.value;
			
			//메세지 전송
			webSocket.send(message);
			this.value = "";
		}
	}
	
	//메세지 수신
	webSocket.onmessage = function(response){
		var display = document.getElementById("display");
		display.innerHTML = "<div>"+response.data+"</div>" + display.innerHTML; 
	}
	
}
</script>
</head>
<body onload="onload();">

<!-- 채팅목록 -->
<div id="display"></div>

<!-- 채팅입력 -->
<div style="position: fixed; bottom: 0;">
	<input id="input" type="text">
</div>

</body>
</html>
```
<br/>
#### 관련 링크
WebSocket과 Socket.io 대한 개념
http://d2.naver.com/helloworld/1336
<br/>
websocket 공식 사이트
http://www.websocket.org/index.html
<br/>
webSocket과 다른 통신기술 비교
http://www.joinc.co.kr/w/man/12/websocket
