import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { NavItem } from '../models/nav-item.type';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() currentNavItem: NavItem;
  @Output() removeTodo = new EventEmitter();
  @Output() toggleTodoCompleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
