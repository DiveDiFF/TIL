var todos = [];
var sortTodos = [];
var statusTodo = 'all';

var list = document.querySelector('#todo-list');
var inputTodo = document.querySelector('#input-todo');
var tabbox = document.querySelector('.nav');
var tabItems = document.querySelectorAll('.nav li');
var chkAll = document.querySelector('#chk-allComplete');
var numChk = document.querySelector('#completedTodos');
var numActive = document.querySelector('#activeTodos');

function renderHTML(status) {
  list.innerHTML = '';

  if (status === 'active') {
    sortTodos = todos.filter(function (todo) {
      return !todo.completed;
    });
  } else if (status === 'completed') {
    sortTodos = todos.filter(function (todo) {
      return todo.completed;
    });
  } else { sortTodos = todos; }

  sortTodos.forEach(function (todo) {
    var checkbox = todo.completed ? 'checked' : '';
    list.innerHTML
      += '<li class="list-group-item">'
        + '<div class="hover-anchor">'
          + '<a class="hover-action text-muted">'
            + '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span>'
          + '</a>'
          + '<label class="i-checks" for="' + todo.id + '">'
            + '<input type="checkbox" id="' + todo.id + '" ' + checkbox + '><i></i>'
            + '<span>' + todo.content + '</span>'
          + '</label>'
        + '</div>'
      + '</li>';
  });

  numChk.innerHTML = todos.filter(function (todo) { return todo.completed; }).length;
  numActive.innerHTML = todos.filter(function (todo) { return !todo.completed; }).length;
}

window.addEventListener('load', function () {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'javaScript', completed: true }
  ];

  renderHTML(statusTodo);
});

function getNextId() {
  return todos.length
    ? Math.max.apply(null, todos.map(function (todo) { return todo.id; })) + 1 : 1;
}

inputTodo.addEventListener('keyup', function (e) {
  if (e.keyCode !== 13 || !inputTodo.value.length) return;
  todos = [{ id: getNextId(), content: inputTodo.value, completed: false }].concat(todos);
  renderHTML(statusTodo);
  inputTodo.value = '';
});

list.addEventListener('click', function (e) {
  if (e.target.nodeName === 'SPAN') {
    todos = todos.filter(function (todo) {
      return todo.id !== +e.target.dataset.id;
    });
  } else { return; }
  renderHTML(statusTodo);
});

list.addEventListener('change', function (e) {
  todos = todos.map(function (todo) {
    return todo.id === +e.target.id
      ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
  renderHTML(statusTodo);
});

tabbox.addEventListener('click', function (e) {
  var tabLi = e.target.parentNode;
  tabItems.forEach(function (tab) {
    tab.className = (tab.id === tabLi.id) ? 'active' : '';
  });
  switch (tabLi.id) {
    case 'all':
      statusTodo = 'all';
      break;
    case 'active':
      statusTodo = 'active';
      break;
    case 'completed':
      statusTodo = 'completed';
      break;
    default:
  }
  renderHTML(statusTodo);
});

chkAll.addEventListener('change', function (e) {
  todos = todos.map(function (todo) {
    return e.target.checked ? Object.assign({}, todo, { completed: true })
      : Object.assign({}, todo, { completed: false });
  });
  renderHTML(statusTodo);
});
