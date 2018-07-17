import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { NavItem } from '../models/nav-item.type';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], navItem: NavItem): Todo[] {
    return todos.filter(todo => {
      switch (navItem) {
        case 'Active':     return !todo.completed;
        case 'Completed':  return todo.completed;
        default:           return true;
      }
    });
  }

}
