import { Component, Input } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

//add todo
//completedTask
//remove todo
//save localstorage
//load localstorage
export class TodoListComponent {
  todos: Todo[] = [];

  get createdTodos():Todo[]{
    return this.todos.filter(todo => !todo.completed);
  } 

  get completedTodos():Todo[]{
    return this.todos.filter(todo => todo.completed);
  }

  addTodo(): void{
    const newTodo:Todo = {
      id: Date.now(),
      task:'New Task...',
      completed : false
    }
    this.todos.push(newTodo);
    console.table(this.todos)

  }

  completeTodo(todo: Todo):void{
    todo.completed = !todo.completed;
    console.table(this.todos)
  }

  removeTodo(todo: Todo):void{
    const index = this.todos.findIndex(t => t.id === todo.id);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }



}
