# 10. prototype

## 정의

- 모든 객체는 자신의 부모 역할을 하는 객체를 가진다. 이 객체와 연결되어 있기 때문에 부모 역할을 하는 객체의 프로퍼티나 메소드를 상속처럼 쓸 수 있음 (객체지향)
- fuction._ _ proto _ _ === object.prototype

## [[prototype]] vs prototype 프로퍼티

- [[prototype]] === _ _ proto _ _
- [[prototype]]은 자신의 프로토타입 객체를 가리키는 프로퍼티
- 생성자 함수 객체가 가지는 부모역할을 하는 객체를 가리키는 프로퍼티가 prototype 프로퍼티

   -> 생성자 함수라는 별도의 문법이 있는것이 아니기 때문에 함수에 일반적 속성인 것. 생성자 함수가 아니라도 똑같이 가지고 있지만 의미 없음.

```javaScript
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo);    // prototype 프로퍼티가 없다.
  // 둘다 __proto__ 프로퍼티는 있다. 
```

프로토타입 체인의 가장 상위에는 object.prototype이 있고, 이를 프로토타입 체인의 종점이라 한다.

## prototype chain

- 객체 리터럴로 생성한 객체는 object()가 syntax sugar로 시스템에서 동작하므로 object.prototype을 부모 객체로 가짐.
- person() 생성자 함수를 이용하여 객체를 만드는 경우는 상속을 이용하기 위해서 대부분 이용함
  - 동일한 함수나 내용을 가지는 프로퍼티를 부모 객체에 두어 연산속도를 높이고 시스템을 안정적으로 만듬
  - object.prototype은 모든 객체의 부모이므로 함부로 프로퍼티를 추가하여 이용하지 않음

## constructor

- 자기 자식을 생성한 함수를 지칭
- 원 객체 입장에서는 자신을 생성한 함수를 참조하기 위해선 _ _ proto _ _를 통해서 constructor를 이용하여 참조

## 기본자료형의 확장

- built-in-method : 시스템이 미리 만들어 놓은 객체 (이용만 하면 됨), 부모 객체에 있음.
- .을 찍는 순간 기본자료형을 값으로 갖는 객체화 됨

## prototype 객체의 변경

- 상속을 억지러 구현하는 방법 (클래스타입과 같이)
- 문법적으로 지원하진 않지만 패턴은 있음
