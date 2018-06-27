let todos = [];
let selectTodos = [];
let status = 'all';

const addTodo = document.querySelector('#input-todo');
const tabBox = document.querySelector('.nav');
const tabItems = document.querySelectorAll('.nav li');
const list = document.querySelector('#todo-list');
const numChk = document.querySelector('#completedTodos');
const numActive = document.querySelector('#activeTodos');
const allChk = document.querySelector('#chk-allComplete');
const clearAll = document.querySelector('#btn-removeCompletedTodos');


function renderHTML(select) {
  if (select === 'active') {
    selectTodos = todos.filter(todo => !todo.completed);
  } else if (select === 'completed') {
    selectTodos = todos.filter(todo => todo.completed);
  } else { selectTodos = todos; }

  list.innerHTML = '';
  selectTodos.forEach(function (todo) {
    const checked = todo.completed ? 'checked' : '';
    list.innerHTML += `<li class="list-group-item">
    <div class="hover-anchor">
      <a class="hover-action text-muted">
        <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${todo.id}"></span>
      </a>
      <label class="i-checks" for="${todo.id}">
        <input type="checkbox" id="${todo.id}" ${checked} ><i></i>
        <span>${todo.content}</span>
      </label>
    </div>
  </li>`;
  });

  numChk.innerHTML = todos.filter(todo => todo.completed).length;
  numActive.innerHTML = todos.filter(todo => !todo.completed).length;
}

window.addEventListener('load', function () {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'javaScript', completed: true }
  ];

  renderHTML(status);
});

function getNextId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

addTodo.addEventListener('keyup', function (e) {
  if (e.keyCode !== 13 || !addTodo.value.length) return;
  todos = [{ id: getNextId(), content: addTodo.value, completed: false }, ...todos];

  renderHTML(status);
});

tabBox.addEventListener('click', function (e) {
  const tabItem = e.target.parentNode;
  tabItems.forEach(function (todo) {
    todo.className = (tabItem.id === todo.id) ? 'active' : '';
  });
  status = tabItem.id;

  renderHTML(status);
});

list.addEventListener('click', function (e) {
  if (e.target.nodeName !== 'SPAN') return;
  todos = todos.filter(todo => todo.id !== +e.target.dataset.id);

  renderHTML(status);
});

list.addEventListener('change', function (e) {
  todos = todos.map(function (todo) {
    return todo.id === +e.target.id ? { ...todo, completed: !todo.completed } : todo;
  });

  renderHTML(status);
});

allChk.addEventListener('change', function (e) {
  todos = todos.map(function (todo) {
    return e.target.checked ? { ...todo, completed: true } : { ...todo, completed: false };
  });

  renderHTML(status);
});

clearAll.addEventListener('click', function () {
  todos = todos.filter(todo => !todo.completed);

  renderHTML(status);
});
