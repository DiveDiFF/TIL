# 6.3 화살표 함수(Allow Function)

```javaScript
var bar = function () {}  //ES5
let baz = () => {}  //ES6
// 매개변수가 없으면 ()

var bar = function (a) {}  //ES5
let baz = a => {}  //ES6
// 매개변수가 하나이면 () 생략

//ES5
var bar = function (a, b) {
  return x + y;
}
//ES6
const baz = (a, b) => x + y;

// 매개변수가 둘 이상이면 () 생략 불가
// 코드블록이 한줄이면 {}, return 생략

console.log(baz(1, 2));
```

```javaScript
const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'javaScript', completed: true }
  ];
//ES6
const res = todos.map(todo => todo.id);
todos.filter(todo => todo.id > 2);
// 화살표 함수 사용 예시
```

```javaScript
//ES5
const foo = function () {
  return { a: 1 };
}
//ES6
const foo () => ({ a: 1});

// 객체를 반환하는 경우 ()로 덮어준다
```

```javaScript
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});
// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```

3. this
  - this는 함수 호출 패턴에 의해 결정된다.

   1. 생성자 함수에서 this는 생성할 객체를 가르킨다.
   2. 메소드에서 this는 메소드를 소유한 객체를 가르킨다.
   3. addEventListener함수에서 this는 currentTarget을 가르킨다.
   4. 콜백함수에서 this는 전역 객체 window를 가리킨다.
      이는 생성자 함수와 객체의 메소드를 제외한 모든 함수(내부 함수, 콜백 함수 포함)
      내부의 this는 전역 객체를 가리키기 때문이다.

- 콜백 함수 내부의 this가 메소드를 호출한 객체(생성자 함수의 인스턴스)를 가리키게 하려면?

      1. that을 만들어 this를 외부에서 할당하고 콜백함수에선 that을 쓴다.
      2. 콜백함수를 호출하는 메소드의 인수로 this를 준다.
      3. 화살표 함수를 쓴다.
      > 콜백함수에서 this는 상위 컨텍스트의 this를 가르킨다.

4. 화살표 함수를 사용하면 안되는 경우
    1. 메소드를 정의하는 경우 -> this가 이상해짐 (전역을 가르킴)
      - 화살표 함수는 무조건 상위 컨텍스트의 this를 가르킨다.
      - 메소드를 소유한(호출한) 객체를 가르키지 않고 window를 가르키게 된다.
    2. 프로토타입 메소드에 할당하는 경우 -> 마찬가지 this가 window가 됨
    3. 생성자 함수를 화살표 함수로 만드는 경우 -> prototype 프로퍼티가 없다.
      - 모든 함수는 prototype 프로퍼티를 가진다 why? 생성자 함수로 사용될 가능성이 있으므로
      - 화살표 함수는 prototype 프로퍼티를 가지지 않는다. -> 생성자 함수로 쓸 수 없음
    4. addEventListener의 콜백함수로 사용되는 경우 -> this가 window가 됨
      - 원래는 currentTarget을 가르키도록 addEventListener가 작동해야 하지만 화살표 함수는
        무조건 상위 컨텍스트의 this인 window를 가르키게 되어버림.
      - 내부에서 this를 쓸 필요가 없으면 써도 무방
