let todos = [];
let selectTodos = [];
let select = 'all';


const inputTodo = document.querySelector('#input-todo');
const list = document.querySelector('#todo-list');
const numCompleted = document.querySelector('#completedTodos');
const numActive = document.querySelector('#activeTodos');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav li');
const allChecked = document.querySelector('#chk-allComplete');
const delCompleted = document.querySelector('#btn-removeCompletedTodos');

function renderHTML(state) {
  if (state === 'active') {
    selectTodos = todos.filter(todo => !todo.completed);
  } else if (state === 'completed') {
    selectTodos = todos.filter(todo => todo.completed);
  } else { selectTodos = todos; }

  list.innerHTML = '';

  selectTodos.forEach((todo) => {
    const checked = todo.completed ? 'checked' : '';
    list.innerHTML
      += `<li class="list-group-item">
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${todo.id}"></span>
              </a>
              <label class="i-checks" for="${todo.id}">
                <input type="checkbox" id="${todo.id}" ${checked}><i></i>
                <span>${todo.content}</span>
              </label>
            </div>
          </li>`;
  });

  numCompleted.innerHTML = selectTodos.filter(todo => todo.completed).length;
  numActive.innerHTML = selectTodos.filter(todo => !todo.completed).length;
}

window.addEventListener('load', () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'javaScript', completed: true }
  ];

  renderHTML(select);
});

inputTodo.addEventListener('keyup', (e) => {
  function getNextID() {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }

  if (e.keyCode !== 13 || !inputTodo.value) return;

  todos = [{ id: getNextID(), content: inputTodo.value, completed: false }, ...todos];

  renderHTML(select);
});

nav.addEventListener('click', (e) => {
  const navItem = e.target.parentNode;
  navItems.forEach(todo => todo.className = (navItem.id === todo.id) ? 'active' : '');

  select = navItem.id;
  renderHTML(select);
});

list.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'SPAN') return;
  todos = todos.filter(todo => todo.id !== +e.target.dataset.id);
  renderHTML(select);
});

list.addEventListener('change', (e) => {
  todos = todos.map(todo => (todo.id === +e.target.id ? { ...todo, completed: !todo.completed } : todo));
});

allChecked.addEventListener('change', (e) => {
  todos = todos.map(todo => (e.target.checked ? { ...todo, completed: true } : { ...todo, completed: false }));
  renderHTML(select);
});

delCompleted.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  renderHTML(select);
});
