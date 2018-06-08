# 12. this


- this는 전역 객체(window)를 가리킨다.

- 예외
  1. 생성자 함수 내의 this는 생성자 함수가 생성한 객체를 가리킨다.
  2. 매소드 내에서 사용한 this는 메소드를 호출한 객체를 가리킨다.


- 바인딩한다. : 어떠한 변수가 객체를 가리키는 링크 상황을 의미


- 자바스크립트 함수 호출 패턴에 따른 this 바인딩 동작
  1. 함수 호출 패턴
      1. 브라우저 환경에선 window
      2. NODE 환경에선 global
  2. 메소드 호출 패턴
  3. 생성자 호출 패턴
  4. apply 호출 패턴
      - 우리가 명시적으로 this의 바인딩을 바꾸고 싶을 때

## 함수 호출 패턴

- 전역객체 window는 전역변수를 프로퍼티로, 전역함수를 메소드로 소유한다.



## 메소드 호출 패턴

- 내부함수, 콜백함수는 메소드가 아니라 일반 함수로 본다. 따라서 여기서 this는 window를 가리킨다.
  -> 설계적 결함

- 이를 회피하기 위해 this를 that(or self) 변수를 하나 만들어 복사하여 사용한다

## 생성자 함수 호출 패턴

- 생성자 함수는 new가 의미를 가지기에 반드시 생성자 함수로 객체를 생성할 땐 new를 붙여야함
- 생성자 함수는 리턴문이 없음...
  - new가 하는일
     1. 첫라인에 빈 객체를 생성한다.
     2. this가 빈 객체를 가리키게 바인딩한다.
     3. 마지막에 this를 return 한다.
  - new를 안쓰면
     1. 일반 함수로 작동
     2. this는 전역객체 window를 가리킨다.
     3. 디스에 name이란 이름의 전역변수를 만든다.
     4. return이 없으니 결과는 undefined

## 객체 리터럴 방식과 생성자 함수 방식의 차이점?

- 객체 리터럴 : 소수의 객체를 만들 때
  - Object() 생성자 함수에 의해 만들어짐, Object.prototype의 유일한 체인을 가짐
- 생성자 함수 : 같은 이름의 프로퍼티를 가진 비슷한 객체를 대량으로 만들 때
  - Person() 생성자 함수 --> Object() 생성자 함수 의 단계에 의해 만들어짐,
    Person.prototype --> Object.prototype 두 단계의 체인을 가짐

## apply 호출 패턴

- apply는 function.prototype의 프로퍼티로 함수를 호출할 때 사용함
  - 함수.apply(디스로 쓸 것(수동지정),인자로 사용할 배열)

>최대/최소값을 구하는 함수
```javaScript
 Math.max.apply(null, arr);
```
- Math는 생성자함수가 없음, 프로토타입이 없음. -> this가 의미가 없으니 null
  - 스태틱 메소드
```javaScript
 Math.max(...array);
```
- ES6 에서는 ... (스프레드연산자) 활용함 : 배열을 푸는 syntax sugar

>배열을 만드는 함수
```javaScript
 Array.prototype.slice.apply(arguments); // arguments.alice
```
-  원래 slice의 this는 해당 메서드를 호출한 배열 []이지만, apply를 통해 arguments를 this로 사용하도록 하는 표현식 
- 유사배열객체도 apply의 인자로 쓸 수 있음. ex string, arguments

## call

- apply와 유사한 기능을 하나 두번째 파라메터로 배열이 아닌 리스트를 가짐