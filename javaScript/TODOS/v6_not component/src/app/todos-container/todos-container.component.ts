import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.interface';
import { NavItem } from '../models/nav-item.type';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent implements OnInit {
  todos: Todo[];

  navItems: NavItem[] = ['All', 'Active', 'Completed'];
  currentNavItem: NavItem = 'All';
  url = environment.url;

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    // this.todos = [
    //   { id: 1, content: 'HTML', completed: true },
    //   { id: 2, content: 'CSS', completed: true },
    //   { id: 3, content: 'javaScirpt', completed: false },
    //   { id: 4, content: 'Angular', completed: false }
    // ];
    // console.log(this.url);
    this.http.get<Todo[]>(this.url)
      .subscribe(todos => this.todos = todos);
  }

  private getNextId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }
  addTodo(content: string) {
    const newTodo: Todo = { id: this.getNextId(), content, completed: false };
    this.http.post<Todo[]>(this.url, newTodo)
      .subscribe(() => this.todos = [newTodo, ...this.todos]);
    console.log('[addTodo] :', newTodo);
  }
  changeNav(navItem: NavItem) {
    this.currentNavItem = navItem;
    console.log('[changeNav] :', navItem);
  }
  removeTodo(id: number) {
    this.http.delete(`${this.url}/${id}`, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.filter(todo => todo.id !== id));
    // this.todos = this.todos.filter(todo => todo.id !== id);
    console.log('[removeTodo] :', id);
  }
  toggleTodoCompleted(id: number) {
    const { completed } = this.todos.find(todo => todo.id === id);
    this.http.patch(`${this.url}/${id}`, {completed: !completed}, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    console.log('[toggleTodoCompleted] :', id);
  }
  toggleTodos(checked: boolean) {
    this.http.patch(this.url, { completed: checked }, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => ({...todo, completed: checked })));
    console.log('[toggleTodos]');
  }
  removeCompletedTodo() {
    this.http.delete(`${this.url}/completed`, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.filter(todo => !todo.completed));
    console.log('[removeCompletedTodo]');
  }
}
