# 24. 문서객체모델(Document Object Model)

- 브라우저가 웹페이지를 받으면
  1. 파싱하여 DOM tree를 만든다.
  2. CSS link를 만나면 파싱을 멈추고 CSS파일을 요청하여 CSSOM tree를 만든다.
  3. 완료 후에 다시 DOM tree를 만들다가 script 태그를 만들면 다시 파싱을 멈추고 script파일을 서버에 요청하여 받는다.
  4. 다 합쳐서 렌더트리를 만들어 화면에 표시함

- DOM에 접근할 땐 document(문서노드, 진입점, root)를 통해서 접근한다.

---

## 하나의 요소 선택 메소드
- document.getElementById(ID)
  - 복수가 선택되면 첫번째 요소만 반환
  - Return: HTMLElement를 상속받은 객체
  - 모든 브라우저에서 동작
- document.querySelector(cssSelector)
  - 복수가 선택되면 첫번째 요소만 반환
  - Return: HTMLElement를 상속받은 객체
  - IE8 이상에서만 동작

---
## 복수의 요소 선택 메소드
- document.getElementsByClassName(class)
  - 같은 이름을 가지는 요소 노드 모두 반환(유사배열객체)
  - Return: HTMLCollection (live) -> 실시간으로 값을 바꿈
- document.querySelectorAll(cssSelector)
  - 지정된 css selector를 사용하여 모든 요소 노드를 선택
  - Return : NodeList (non-live)
  - IE8 이상에서만 동작
---
## 탐색 프러퍼티
- parentNode
  - 부모요소를 찾아감
- firstChild, lastChild
  - 자식요소를 찾아감 (공백 text(enter)까지 자식요소로 봄을 주의)
- previousSibling, nextSibling
  - 형제요소를 찾아감 
---
## text, attribute 노드에 접근하는 법
- text노드
  - 요소 노드의 자식요소
  1. 해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식이다.
  2. firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
  3. 텍스트 노드의 유일한 프로퍼티(nodeValue)를 이용하여 텍스트를 취득한다.
  4. nodeValue를 이용하여 텍스트를 수정한다.


- attribute 노드
  - HTML 상 attribute는 DOM 객체의 프로퍼티로 변환
    -> 메소드나 프러퍼티를 활용해 접근한다.

## 컨텐트 조작

- innerHTML
  - 마크업을 포함한 모든 콘텐츠를 문자열로 반환한다.
  - 마크업이 포함된 콘텐츠 추가는 크로스 스크립팅 공격에 취약하다.

- DOM 직접조작
  - createElement(tagName)
    - 새로운 요소를 만듬
  - createText(Text)
    - 새로운 텍스트노드를 만듬
  - appendChild(Node)
    - 요소노드나 텍스트노드의 부모자식관계 형성
  - removeChild(Node)
    - 노드 삭제

- insertAdjacentHTML(position, string)
  - position : beforebegin, afterbegin, beforeend, afterend

- 셋다 실무에서 쓰긴 어려움