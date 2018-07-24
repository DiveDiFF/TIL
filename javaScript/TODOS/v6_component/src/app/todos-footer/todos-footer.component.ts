import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.css']
})
export class TodosFooterComponent {
  @Input() todos: Todo[];
  @Output() toggleTodos = new EventEmitter();
  @Output() removeCompletedTodo = new EventEmitter();


  getCntActiveTodos() {
    return this.todos.filter(todo => !todo.completed).length;
  }
  getCntCompletedTodos() {
    return this.todos.filter(todo => todo.completed).length;
  }


}
