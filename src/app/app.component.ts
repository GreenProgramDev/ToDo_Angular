import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'My To Do';
  public todos: Todo[] =[];
  public todosDone: Todo[] =[]

  constructor() {
    this.todos.push(new Todo(1, 'fluindo', false))
    this.todosDone.push(new Todo(1, 'done ', true))
  }
  
  remove(){

  }

  markAsDone(){

  }
  markAsUndone(){
    
  }
  
}
