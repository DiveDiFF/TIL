

# 9. function(함수)

---

- 인자 : parameter 매개변수
- 인수 : argument 함수 호출할 때 파타메터 값

기본자료형은 pass-by-value 로 다른 함수로 재할당하면 imutable로 그 값이 복사하여 할당됨. 반면 객체형은 pass-by-reference 로 다른 함수로 재 할당해도 주소만 할당되어 값이 같이 변함. (mutable) 
  -> side effect (부수효과)

변수 입장에선 pas-by-value, pass-by-reference, 함수 입장에선 call-by-value, call-by-reference

---

함수는 자신을 호출한 코드 (caller)에게 수행한 결과를 반환 할 수 있다. 반환하지 않으면 암묵적으로 undefined를 반환함

배열 : index(순서)가 있음, 순회할 수 있다(iterable). For 문으로 돌릴 수 있음(순서가 보장) 갯수가 있어야 함(객체는 순서가 없음), 유사배열객체는 for 문을 돌릴 수 있다.(배열처럼 사용할 수 있다.)

객체의 내부까지 싹 다 확인할 때 console.dir 사용 (비표준 : javascript의 표준이 아니고 chrome이 만든 것)


---

함수의 표준 프로퍼티 : arguments, caller, length, name, prototype, proto

- Argument : 함수 호출 시 전달된 인수들의 정보를 담고 있음, 유사배열객체임, 함수 내부에서 지역변수처럼 사용 가능
> javascript는 함수 인자의 수에 맞는 인수를 지정하지 않아도, (적게 또는 많게) 작동한다. 심지어 인자의 수가 정해지지 않은 가변지정함수도 가능하다.

- caller : 자신을 호출한 함수
- length : parameter (인자)의 갯수
- name : 함수명
- _ _ proto _ _ : [[prototype]] 똑같음

```javascript
  function Person(name){    //빈객체를 만듬
    this.name = name;     //'name'이라는 프로퍼티를 동적 할당
  }
  var me = new Person('Lee');   //'name' 프로퍼티의 값으로 'Lee' 할당

```
<△생성자 함수의 역할>

모든 객체는 자신의 부모 역할을 하는 숨겨진 객체를 가지고 있다.
   -> prototype (person.prototype) [[prototype]]으로 찾아감

함수 객체는 여기에 더해서 prototype 객체를 추가로 가짐

- prototype : 함수 객체만 가지고 있는 프로퍼티
   _ _ proto_ _ (=[[prototype]]) 과 똑같은 주소를 가르키고 있지만 누구를 기준으로 하느냐에 따른 차이 

---

### 즉시호출함수표현식 (IIFE, Immediately Invoke Function Expression)

- 한번만 호출
- (function (인자){메소드} (인수)); 로 사용

>- javaScript는 파일이 달라도 글로벌 스코프가 하나이므로, 원치 않는 변수의 중복이 발생할 위험 있음 (모듈화를 지원하지 않는다) -> 애플리케이션을 만드는 언어로 부적합함 
>- javaScript는 스코프가 단순함, 함수내부에 선언되는 변수만 지역변수, 나머지는 다 전역변수
>- 가급적 전역변수 선언을 자제해야 하며, 변수의 생명주기를 짧게 해야함

 - 즉시호출함수표현식의 사용 이유임 -> 모듈화를 위해서

---

### 내부함수 (inner function)

- 함수 내부에서만 사용하기 위해 만든 child 함수
- 외부에서 참조할 수 없음 (내부에서만 호출 가능)

### 콜백함수 (callback function)

- 특정 조건(이벤트발생)에서 시스템에 의해 호출되는 함수
- 비동기 처리에 사용하기 위해 만드는 함수
- 99%가 비동기 함수임

