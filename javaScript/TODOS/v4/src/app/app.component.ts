import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.interface';
import { NavItem } from './models/nav-item.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[];
  content = '';
  navItems: NavItem = ['All', 'Active', 'Completed'];
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
  changeNav(navItem: string) {
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
