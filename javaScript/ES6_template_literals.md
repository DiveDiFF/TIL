# 6.2 템플릿 리터럴

- ES5의 문자열 리터럴 방식
  - 작은따옴표, 큰 따옴표, 스트링 생성자 함수
- 백틱(backtick) `을 활용한 리터럴 방식 추가
  - 장점 : 줄바꿈 가능, 템플릿 대입문 ${expression}을 쓸 수 있다.

```javaScript
const first = 'Ung-mo';
const last = 'Lee';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');

// ES6: String Interpolation
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.
```

> ${expression} : 문자열로 표현 가능한 표현식이 올수 있음(하나의 값으로 수렴되는)

