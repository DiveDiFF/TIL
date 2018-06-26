# 6.4 Extended Parameter Handling

1. 파라미터 기본값 (Defalut Parameter Value)

- ES6는 파라미터에 기본값을 설정하여 함수 내에서 따로 체크 및 초기화 할 필요가 없다.
```javaScript
// ES5
function plus(x, y) {
  x = x || 0; // 매개변수 x에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
  y = y || 0; // 매개변수 y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
  return x + y;
}
console.log(plus());     // 0
console.log(plus(1, 2)); // 3

// ES6
function plus(x = 0, y = 0) {
  // 파라미터 x, y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
  return x + y;
}
console.log(plus());     // 0
console.log(plus(1, 2)); // 3
```

1. REST 파라미터

- 나머지 파라미터는 Spread 연산자를 사용하여 파라미터를 정의한 것. (...)
- 배열로 들어옴
- 반드시 마지막 파라미터로 쓴다.
- arguments는 함수의 인수들의 유사배열 (배열메소드로 사용하려면 Function.prototype.slice.call을 사용)
> but Function.arguments로 쓰지 못함. 함수 내부에서 지역변수처럼 사용.
- REST 파라미터를 쓰면 arguments를 사용할 일이 없음.(가변 인자가 REST 파라미터로 가능하므로)
- 화살표 함수는 arguments 프로퍼티가 없다. -> 가변 인자를 사용하고 싶으면 무조건 REST 파라미터를 쓴다.

1. Spread 연산자 (...)

*이터러블???

- ...[], ...'Hello' => 배열(유사배열객체)을 푼다.
- REST 파라미터는 ...연산자를 사용하여 파라미터를 정의한 것일 뿐 서로 다르다.
  (REST 파라미터 !== Spread 연산자)

- ES5에서 Allay.concat => ...를 쓰면 배열 리터럴 만으로 가능하다.
- concat은 기본적으로 파라매터로 받은 배열을 풀어서 대상 배열에 포함시킨다.

```javaScript
var arr = [1, 2, 3];
// ES5
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
// ES6
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
```

- apply, call을 ...로 대체할 수 있다. 둘 다 배열을 풀어서 인수로 쓰기 위해 사용했으나, ...이 이를 간편하게 대체한다.

```javaScript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

// ES5
// apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 push 메소드에 전달된다.
Array.prototype.push.apply(arr1, arr2);

//ES6
arr1.push(...arr2); // == arr1.push(4, 5, 6);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

