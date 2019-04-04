import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosPageComponent} from './containers/todos-page/todos-page.component';
import {TodosComponent} from './components/todos/todos.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodosFiltersComponent} from './components/todos-filters/todos-filters.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TodosPageComponent, TodosComponent, TodoComponent, TodosFiltersComponent]
})
export class TodosModule {
}
