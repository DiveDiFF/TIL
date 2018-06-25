var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

function getIds() {
  var arr = todos.map(function (item) {
    return item.id;
  });
  return arr;
};
console.log(getIds());

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

function maxNum() {
  return Math.max.apply(null, getIds());
};
console.log(maxNum());

// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function addArr() {
  return todos = [{ id: 4, content: 'Test', completed: false }].concat(todos);
}

console.log(addArr());

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function delArr() {
  todos = todos.filter(function (item) {
    return item.id !== 4;
  });
  return todos;
};
console.log(delArr());

// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function todoChecked() {
  return todos = todos.map(function (todo) {
    return todo.id === 3 ? Object.assign( {}, todo, {completed: !todo.completed}) : todo;
  })
};
console.log(todoChecked());

// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ];

function allChecked() {
  return todos = todos.map(function (todo) {
    return Object.assign( {}, todo, {completed: true});
  });
}; 

console.log(allChecked());

// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라

function checkedCount(){
  return todos.filter(function (todo) {
    return todo.completed;
  }).length;
};

console.log(checkedCount());