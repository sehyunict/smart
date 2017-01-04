####1. md File 작성법
(md파일 자세한 문법은 md파일을 에디터에서 열어 확인할 수 있습니다)

#####1.1. 헤더Headers

글머리: 1~6까지만 지원

 # This is a H1
# This is a H1
 ## This is a H2
## This is a H2
 ### This is a H3
### This is a H3
 #### This is a H4
#### This is a H4
 ##### This is a H5
##### This is a H5
 ###### This is a H6
###### This is a H6

---

#####1.2. BlockQuote

이메일에서 사용하는 > 블럭인용문자를 이용한다.
(이 안에서는 다른 마크다운 요소를 포함할 수 있다.)

 > This is a blockqute.
>This is a first blockqute.

---

#####1.3. 목록

 ● 순서있는 목록(번호)

순서있는 목록은 숫자와 점(*)을 사용한다.

1. 첫번째
2. 두번째
3. 세번째

● 순서없는 목록(글머리 기호)

_* 빨강_
<br/>
_(공백2칸)* 녹색_
<br/>
_(공백4칸)* 파랑_

* 빨강
  * 녹색
    * 파랑

_+ 빨강_
<br/>
_(공백2칸)+ 녹색_
<br/>
_(공백4칸)+ 파랑_
    
+ 빨강
  + 녹색
    + 파랑

---

#####1.4. 코드 

**<pre><code>**

이 안에 code를 작성 해 주세요

**</code></pre>**

(github 전용)

**```java**

이 안에 code를 작성 해 주세요

**```**

(github 전용)

**```javascript**

이 안에 code를 작성 해 주세요

**```**

4개의 공백 또는 하나의 탭으로 들여쓰기를 만나면 변환되기 시작하여 들여쓰지 않은 행을 만날때까지 변환이 계속된다.

**    This is a code block.**
end code block.


#####1.5. 수평선<hr/>

아래 줄은 모두 수평선을 만든다. 마크다운 문서를 미리보기로 출력할 때 페이지 나누기 용도로 많이 사용한다.

_* * *_
* * *

_***_
***
**- - -**
- - -

**---**
-----------------

#####1.6. 링크

###### 참조링크

[link keyword][id]

**[id]: URL "Optional Title here"**

Link: [Google][googlelink]

**[googlelink]: https://google.com "Go google"**
<br/>
**Link: Google**


###### 인라인 링크

*syntax: [Title](link)*
<br/>
Link: Google


###### 자동연결

**<http://example.com/>**
<br/>
**<address@example.com>**
http://example.com/ address@example.com


#####1.7. 강조

```javascript
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
++underline++
~~cancelline~~
```

#####1.8. 이미지
> 문법을 git에서 자동으로해석하여.. 이미지 추가 문법은 md파일 원본으로 확인 필요

![굶지마](./dontStarve.jpg)

![굶지마](./dontStarve.jpg "투게더")

#####1.9. 줄바꿈
 **<br/>**태그를 추가하여 줄바꿈


#####1.10. 이모티콘
:smile::ghost::cow:<br/>
http://www.webpagefx.com/tools/emoji-cheat-sheet/


<br><br>