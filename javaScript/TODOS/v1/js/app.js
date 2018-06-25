var todos = [];

var list = document.querySelector('ul');
var inputTodo = document.querySelector('#input-todo');

function renderHTML() {
  todos.forEach(function (todo) {
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
}

window.addEventListener('load', function () {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'javaScript', completed: true }
  ];

  renderHTML();
});

function getNextId() {
  return todos.length
    ? Math.max.apply(null, todos.map(function (todo) { return todo.id; })) + 1 : 1;
}

inputTodo.addEventListener('keyup', function (e) {
  if (e.keyCode !== 13 || !inputTodo.value.length) return;
  todos = [{ id: getNextId(), content: inputTodo.value, completed: false }].concat(todos);
  list.innerHTML = '';
  renderHTML();
  inputTodo.value = '';
});

list.addEventListener('click', function (e) {
  if (e.target.nodeName === 'SPAN') {
    todos = todos.filter(function (todo) {
      return todo.id !== +e.target.dataset.id;
    });
  } else { return; }
  list.innerHTML = '';
  renderHTML();
});

list.addEventListener('change', function (e) {
  todos = todos.map(function (todo) {
    return todo.id === +e.target.id
      ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
  list.innerHTML = '';
  renderHTML();
});
