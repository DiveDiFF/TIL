import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Component({
  selector: 'app-todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.css']
})
export class TodosInputComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() addTodo = new EventEmitter();
  content = '';
  constructor() { }

  ngOnInit() {
  }

  handleInput() {
    if (!this.content) { return; }
    this.addTodo.emit(this.content);
    this.content = '';
  }
}
