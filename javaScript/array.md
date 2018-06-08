# 23. 배열 (array)

- 객체와 비슷하지만 순서가 있다는 점에서 가장 큰 차이
  - 유사배열객체
- 배열 [ 요소1, 요소2]
- 배열도 객체이다. 프러퍼티가 적용된다.
- 각 요소의 타입이 일치할 필요는 없지만 가급적 일치 시켜주는게 좋음

- 배열은 typeof 를 쓰면 object로 나옴
  - ES5는 isArray() 메소드를 지원함

- array의 concat은 배열의 연결로 많이 씀
  - concat은 대상 배열 자체를 바꾸지 않고 복사본을 반환

- 자료형의 종류
  - stack : FILO, LIFO
  - Queup : FIFO 

- push, pop : stack 방식
- unshift, shift : queup 방식

- 배열에서는 원본 배열을 변경하는 것과 변경하지 않는 메소드가 있어 이를 주의해야함

- 자료 정렬
  - 오름차순 : sort() 함수 이용
  - 내림차순 : sort() 함수 + reverse() 함수 이용

---
## forEach()

- 배상 배열을 순회하며 각각의 요소에 callback 함수를 실행한다.
- testArray.forEach(item, index, array) {}


```javascript
testArray.forEach(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  total += item; 
});
```
> for문으로 바꾸면
```javascript
var total = 0;
for(var i = 0; i < arr.length; i++) {
  total += array[i];
}
```
> 고차함수로 바꾸면
```javascript
arr.forEach((item,i) => total += item);
```

