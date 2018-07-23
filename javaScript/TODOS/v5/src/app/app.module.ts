import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFilterPipe } from './pipes/todo-filter.pipe';
import { TodoContainerComponent } from './todo-container.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoNavComponent } from './todo-nav.component';
import { TodoListComponent } from './todo-list.component';
import { TodoFooterComponent } from './todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFilterPipe,
    TodoContainerComponent,
    TodoInputComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
