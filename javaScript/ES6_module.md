# 6.8 모듈

- javaScript는 오직 하나의 전역(window) 스코프만 가진다.
- 이는 여러가지 문제점이 생김
    1. 변수, 함수명 중복
    2. 선언 순서 설정의 어려움
    3. 전역변수, 함수의 난발
- 유일하게 지역 스코프를 가질 수 있는건 함수 뿐임
- IIFE (익명즉시호출식함수)를 사용한 모듈화
- 모듈이란? 애플리케이션을 구성하는 개별적 요소로서 $재사용$ 가능한 코드 조각을 말한다.
- CBD (Component Based Development) : 기존엔 다른 언어(HTML, CSS, javaScript)로 작성되는 코드(다른 관심사에 따른 코드)들은 철저히 분리되어야 한다는 기조가 강했으나, 모듈화를 위한 작업으로 이를 하나의 파일화 하자는 움직임 -> Angular
- 타 언어는 기본적으로 모듈기능을 지원하지만 javaScript는 원래 웹페이지의 보조적 기능 수행을 위한 용도로 개발된 언어이므로 모듈 기능이 없음
- 이를 해결하고, javaScript를 범용적으로 사용하고자 하는 움직임에 CommonJS, AMD가 제안됨
- NodeJS는 CommonJS를 사실상 표준으로 채택, 클라이언트 사이드는 ES6에 스펙만 있고 구현은 안되어 있음 -> SystemJS, RequireJS 모듈 로더 또는 Webpack 모듈 번들러 사용하고 있음

---

## EXPORT

- 외부에 공개한다는 의미
- 변수, 함수, 클래스의 선언문 앞에 export 키워드를 붙인다.

## IMPORT

- 객체 디스트럭쳐링으로 가져옴

읽어보기  JavaScript 표준을 위한 움직임: CommonJS와 AMD(https://d2.naver.com/helloworld/12864)