# 26. Event

- 브라우저는 이벤트를 감지할 수 있으며, 발생 시에 대응할 함수(이벤트 핸들러, 콜백 함수)를 처리할 수 있다. 

- 브라우저(이벤트 루프)는 이벤트를 감지하고 있다가, 이벤트가 발생하면 이벤트 핸들러(콜백 함수)를 이벤트 큐에 담았다가 콜 스택이 모두 비워지면(Global EC만 남으면) 실행함.

---
## 이벤트 바인딩

1. HTML 이벤트 핸들러
  - HTML 요소의 attribute로 이벤트 attribute를 추가해 이벤트 핸들러를 추가하는 방식
```HTML
<body>
  <button onclick="myFunction()">Click me</button>
  <script>
    function myFunction() {
      alert('Button clicked!');
    }
  </script>
</body>
```
  - 관심사 분리의 방식으로 사용하지 않음 (최근 angular 등 다시 통합하여 사용하자는 이야기도 있음)

2. 전통적 DOM 이벤트 핸들러
  - 스크립트에서 요소를 불러 이벤트 핸들러를 대응하는 방식
  - 하나의 함수만 바인딩 할 수 있다는 단점 있음

```HTML
<body>
  <button id="btn">Click me</button>
  <script>
    var btn = document.getElementById('btn');
    btn.onclick = function () {
      alert('Button clicked 1');
    };
  </script>
</body>
```

3. DOM Level 2 이벤트 핸들러
  - addEventListener('event', function)
  - 여러번 사용하여 여러개의 이벤트 핸들러를 바인딩할 수 있음
  - IE 9 이상에서 작동(IE 8에서는 attachEvent()사용)
  - 타겟요소를 지정하지 않으면 window에 바인딩 됨
  - addEventListener의 fuction에서 다른 fuction을 호출하는 방식으로 함수에 인자를 줄 수 있다.

---
## this
- addEventListener는 바인딩된 요소를 this로 재할당해줌

---
## Event Flow
1. Capture Phase : window -> target 요소
2. Bublling Phase : target 요소 -> window

> 버블링은 왜 필요한가?
>  - 부모요소에 이벤트를 줘서 자식요소 전체에서 발생하는 이벤트를 핸들링 할 수 있어 짐 
---
* 서버사이드렌더링(SCR)
  - 서버가 html 파일을 바꿔 페이지를 전환하는 방식
  - 화면이 깜빡임...
<-> 클라이언트사이드렌더링(CCR) 

```HTML
<!DOCTYPE html>
<html>
<head>
  <style>
    html, body { height: 100%; }
  </style>
<body>
  <p>버블링 이벤트 <button>버튼</button></p>
  <script>
    var body = document.querySelector('body');
    var para = document.querySelector('p');
    var button = document.querySelector('button');

    // 버블링
    body.addEventListener('click', function () {
      console.log('Handler for body.');
    });

    // 캡쳐링
    para.addEventListener('click', function () {
      console.log('Handler for paragraph.');
    }, true);

    // 버블링
    button.addEventListener('click', function () {
      console.log('Handler for button.');
    });
  </script>
</body>
</html>
```
---
## EVENT 객체

- 이벤트가 발생하면 브라우저는 이벤트 객체를 생성해서 이벤트핸들러의 첫번째 인자로 전달한다. 

## EVENT TARGET

- 이벤트를 발생시킨 요소
  - e.target 으로 정보를 전달

- 이벤트 핸들러 함수 내부에선 this가 current target 을 가르킨다.

---
## EVENT DELEGATION

- 이벤트 핸들러를 target 요소 모두에 바인딩 하지 않고, 부모 요소에 바인딩함(버블링 활용)
