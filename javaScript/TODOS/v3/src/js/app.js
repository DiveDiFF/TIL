import axios from 'axios';

(function () {
  // TODO:

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
    selectTodos.forEach(todo => {
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

  function getTodos() {
    axios.get('/todos')
      .then(res => {
        todos = res.data;
        renderHTML(select);
      })
      .catch(err => console.log(err.response));
  }

  window.addEventListener('load', () => {
    getTodos();
  });

  inputTodo.addEventListener('keyup', e => {
    function getNextID() {
      return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    }

    const newTodo = { id: getNextID(), content: inputTodo.value, completed: false };

    if (e.keyCode !== 13 || !inputTodo.value) return;

    axios.post('/todos', newTodo)
      .then(() => {
        todos = [newTodo, ...todos];
        console.log('[POST] :', newTodo);
        renderHTML(select);
      })
      .catch(err => console.log(err.response));
  });

  nav.addEventListener('click', e => {
    const navItem = e.target.parentNode;
    navItems.forEach(todo => todo.className = (navItem.id === todo.id) ? 'active' : '');

    select = navItem.id;
    renderHTML(select);
  });

  list.addEventListener('click', e => {
    if (e.target.nodeName !== 'SPAN') return;

    axios.delete(`/todos/${e.target.dataset.id}`)
      .then(() => {
        todos = todos.filter(todo => todo.id !== +e.target.dataset.id);
        console.log(`[DELETE] id : ${e.target.dataset.id}`);
        renderHTML(select);
      })
      .catch(err => console.log(err.response));
  });

  list.addEventListener('change', e => {
    const { completed } = todos.find(todo => todo.id === +e.target.id);

    axios.patch(`/todos/${e.target.id}`, { completed: !completed })
      .then(() => {
        // todos = todos.map(todo => todo.id === +e.target.id ? { ...todo, ...{ completed: !todo.completed }} : todo);
        todos = todos.map(todo => todo.id === +e.target.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo);
        console.log(`[PATCH] id : ${e.target.id}, completed : ${!completed}`);
        renderHTML(select);
      })
      .catch(err => console.log(err.response));
  });

  allChecked.addEventListener('change', e => {
    const { completed } = todos;
    axios.patch('/todos/', e.target.checked ? { completed: true } : { completed: false })
      .then(() => {
        todos = todos.map(todo => (e.target.checked ? Object.assign({}, todo, { completed: true }) : Object.assign({}, todo, { completed: false })));
        console.log(`[PATCH] ${e.target.checked}`);
        renderHTML(select);
      })
      .catch(err => console.log(err.response));
  });

  delCompleted.addEventListener('click', () => {
    axios.delete('/todos/completed')
      .then(() => {
        todos = todos.filter(todo => !todo.completed);
        console.log('[DELETE] all completed');
        renderHTML(select);
      })
      .catch(err => console.log(err.response));
  });
}(axios));
