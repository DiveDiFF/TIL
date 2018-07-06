# TypeScript

- 타 언어와 구분되는 javaScript 의 특징
1. Prototype-based Object Oriented Language
2. Scope와 this
3. 동적 타입(dynamic typed) 언어 혹은 느슨한 타입(loosely typed) 언어

- 이로 인해 문제점 야기
1. 클래스 타입에 익숙한 개발자에게 혼란 가중
2. 디버그와 테스트의 공수 증가

- coffeeScript, Dart, Haxe, TypeScript 등 대체 언어의 등장(ArtJS)
- TypeScript는 ES5, ES6, ES7 까지 javaScript의 superset

- Angular의 TypeScript 정식 채용으로 관심 증가

---
## TypeScript의 장점

1. 정적타입

```typeScript
function sum(a: number, b: number) {
  return a + b;
}

sum('x', 'y');
// error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.
```
- boolean		true와 false
- null		값이 없다는 것을 명시
- undefined		값을 할당하지 않은 변수의 초기값
- number		숫자(정수와 실수, Infinity, NaN)
- string		문자열
- symbol		고유하고 수정 불가능한 데이터 타입이며 주로 객체 프로퍼티들의 식별자로 사용(ES6에서 추가)
- object		객체형(참조형)
- array		배열
- tuple		고정된 요소수 만큼의 자료형을 미리 선언후 배열을 표현
- enum		열거형. 숫자값 집합에 이름을 지정한 것이다.
- any	 	타입 추론(type inference)할 수 없거나 타입 체크가 필요없는 변수에 사용.
- var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당 가능.
- void		일반적으로 함수에서 반환값이 없을 경우 사용한다.
- never		결코 발생하지 않는 값


1. 다양한 도구의 지원

- 다양한 도구의 지원이 손쉬움
- 클래스 기반 객체지향 지원
- ES의 새로운 스펙의 유용한 기능의 선제 도입

---
## 클래스

- ES6의 클래스
  1. 반드시 constructor가 있어야 한다. (생략가능하지만 생략하면 빈 객체 생성)
  2. 클래스 프로퍼티는 컨스트럭터 내부에 this로 단다. 매개변수로 프로퍼티 값을 설정한다. -> 클래스 바디에는 메소드만 올 수 있다.

- TS의 클래스
  1. 클래스 프로퍼티를 constructor 밖 클래스 바디 사전 선언 한다. -> 클래스 바디에 프로퍼티와 메소드가 모두 올 수 있다.
    - 생성자 파라미터에 접근 제한자를 선언하면 자동으로 클래스 프로퍼티로 선언한다.
  2. 접근 제한자
      1. public : 다 볼 수 있다.
      2. protected : 상속관계에서만 볼 수 있다.
      3. private : 자신만 볼 수 있다.

  3. 생성자 파라미터에 접근 제한자
  4. readonly키워드
      - 재할당 불가, 상수 선언에 사용
  5. 정적매소드
      - static 키워드를 이용하여 선언. 호출할때는 클래스 이름으로 호출
      - 프로퍼티를 만들 수도 있음
  6. 추상클래스
      - abstract 키워드를 붙여 선언. 추상 메소드를 포함한 클래스
      - 일반 메소드도 있을 수 있음
      - 추상 메소드는 내용없이 메소드 이름과 타입만 선언된 메소드
  7. 인터페이스
      - interface 키워드는 변수, 함수, 클래스의 타입 체크를 위해 사용됨
      - 모든 메소드가 추상메소드(일반메소드를 가질 수 없다)
      - 모든 메소드가 구현을 전제한다.
      - 인터페이스로 변수에 타입을 지정할 수 있음(새로운 타입 정의)
      - extends 대신 implements를 사용한다. (상속보다 구현의 개념)
  8. 선택적 프로퍼티
      - 프로퍼티 네임 뒤에 ?를 붙임

  9. 제네릭
      - 타입 지정을 매개변수처럼 줘서 생성할 때 타입이 결정된 클래스를 만들 수 있음
      - 함수에도 사용 가능
      - `<T>` T: Type