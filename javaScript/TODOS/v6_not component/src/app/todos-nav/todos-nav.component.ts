import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../models/nav-item.type';

@Component({
  selector: 'app-todos-nav',
  templateUrl: './todos-nav.component.html',
  styleUrls: ['./todos-nav.component.css']
})
export class TodosNavComponent implements OnInit {
  @Input() navItems: NavItem[];
  @Input() currentNavItem: NavItem;
  @Output() changeNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
