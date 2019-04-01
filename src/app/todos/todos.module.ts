import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosPageComponent} from './containers/todos-page/todos-page.component';
import {TodosComponent} from './components/todos/todos.component';
import {TodoComponent} from './components/todo/todo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosPageComponent, TodosComponent, TodoComponent]
})
export class TodosModule {
}
