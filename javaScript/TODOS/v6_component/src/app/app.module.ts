import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoFilterPipe } from './pipes/todo-filter.pipe';
import { TodosContainerComponent } from './todos-container/todos-container.component';
import { TodosInputComponent } from './todos-input/todos-input.component';
import { TodosNavComponent } from './todos-nav/todos-nav.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosFooterComponent } from './todos-footer/todos-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFilterPipe,
    TodosContainerComponent,
    TodosInputComponent,
    TodosNavComponent,
    TodosListComponent,
    TodosFooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
