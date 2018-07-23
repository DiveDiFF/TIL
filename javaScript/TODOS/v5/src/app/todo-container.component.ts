import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.interface';
import { NavItem } from './models/nav-item.type';

@Component({
  selector: 'app-todo-container',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <h1 class="title">Todos</h1>
      <input class="form-control input-lg" placeholder="What needs to be done?" autofocus
          (keyup.enter)="addTodo()"
          [(ngModel)]="content">
      <ul class="nav nav-xs nav-pills">
        <li *ngFor="let navItem of navItems"
            [class.active]="navItem === currentNavItem"
            (click)="changeNav(navItem)">
          <a>{{ navItem }}</a>
        </li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let todo of todos | todoFilter: currentNavItem">
          <div class="hover-anchor">
            <a class="hover-action text-muted">
              <span class="glyphicon glyphicon-remove-circle pull-right"
                  (click)="removeTodo(todo.id)"></span>
            </a>
            <label class="i-checks"
                [for]="todo.id">
              <input type="checkbox"
                  [id]="todo.id"
                  [checked]="todo.completed"
                  (change)="toggleTodoCompleted(todo.id)"><i></i>
              <span>{{ todo.content }}</span>
            </label>
          </div>
        </li>
      </ul>
      <div class="col-xs-6">
        <label class="i-checks" style="padding-left: 20px">
          <input type="checkbox"
              (change)="toggleTodos($event.target.checked)"><i></i><span>Mark all as complete</span>
        </label>
      </div>
      <div class="col-xs-6 text-right">
        <button class="btn btn-default btn-xs"
            (click)="removeCompletedTodo()">Clear completed (<span>{{ getCntCompletedTodos() }}</span>)</button>
        <strong> {{ getCntActiveTodos() }} </strong> items left
      </div>
    </div>
  </div>
  <pre>{{ todos | json }}</pre>
</div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  todos: Todo[];
  content = '';
  navItems: NavItem[] = ['All', 'Active', 'Completed'];
  currentNavItem: NavItem = 'All';

  ngOnInit() {
    this.todos = [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'javaScirpt', completed: false },
      { id: 4, content: 'Angular', completed: false }
    ];
  }

  private getNextId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) +1 : 1;
  }
  addTodo() {
    if (!this.content) { return; }
    const newTodo: Todo = { id: this.getNextId(), content: this.content, completed: false };
    this.todos = [newTodo, ...this.todos];
    this.content = '';
    console.log('[addTodo] :', newTodo);
  }
  changeNav(navItem: NavItem) {
    this.currentNavItem = navItem;
    console.log('[changeNav] :', navItem);
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log('[removeTodo] :', id);
  }
  toggleTodoCompleted(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    console.log('[toggleTodoCompleted] :', id);
  }
  toggleTodos(checked: boolean) {
    this.todos = this.todos.map(todo => ({...todo, completed: checked }));
    console.log('[toggleTodos]');
  }
  removeCompletedTodo() {
    this.todos = this.todos.filter(todo => !todo.completed);
    console.log('[removeCompletedTodo]');
  }
  getCntActiveTodos() {
    return this.todos.filter(todo => !todo.completed).length;
  }
  getCntCompletedTodos() {
    return this.todos.filter(todo => todo.completed).length;
  }

}
