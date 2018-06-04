# 16. built - in - object

## 객체의 분류

- Native object : object, string, function, array etc...
  - 환경과 관계없이 언제나 사용할 수 있음 
  - Native objects, Built-in objects, Grobal objects 로 표현하기도 함(grobal object 전역객체와 혼동 주의)
- Host object : windows, document, DOM, ajax etc...
  - ECMAscript spec에 없음, 호스트가 제공하는 객체, 환경에 영향을 받음
- User-definded object

## Error

- javascript 는 비동기처리가 많아 Error 처리가 안된다.
- 다양한 방법으로 처리방법을 연구해 왔으나, 아직도 과도기적 연구상태에 지나지 않음

## 전역객체 (Global Object)

- 애플리케이션 전역에서 언제든 어디서든 참조 가능한 객체
- constructor가 없다 (임의 생성 불가)
- 전역 스코프를 가진다.
- 전역 객체의 기술을 생략하여 자식 객체를 호출할 수 있다.
  - ex) windows.document --> document
- 전역 변수, 함수는 전역 객체의 프로퍼티다.

## isFinite(), isNaN()

- number나 math에도 있으나, 형변환 유무가 차이있음

