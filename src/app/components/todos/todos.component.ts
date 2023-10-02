import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  
  // todos: Todo[] = new Array<Todo>();
  todos: Todo[] = [];
  
  
  constructor() {
    this.todos = [];
   }
  
  ngOnInit(): void {
    this.todos = [
      {
        content: 'first Todo',
        completed: false
      },
      {
        content: 'second Todo',
        completed: true
      }
    ]
  }

}
