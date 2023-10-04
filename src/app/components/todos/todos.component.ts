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
  inputTodo: string = "";
  
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
        completed: false  
      }
    ]
  }

  toggleDone(id: number): void {
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id: number): void{
    this.todos = this.todos.filter((val, i) => i != id);
  }

  addTodo(): void {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = "";
  }
}
