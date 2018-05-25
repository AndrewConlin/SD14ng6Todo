import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // class properties
  title = 'ngTodo';

  selected = null;

  todos: Todo[] = [];

  todo = new Todo();

  editTodo = null;

  // class methods
  getNumTodos = function() {
    return this.todos.length;
  };

  displayTodo = function(todo) {
    this.selected = todo;
  };

  displayTable = function() {
    this.selected = null;
  };

  addTodo = function() {
    this.todoService.create(this.todo).subscribe(
      data => {
        this.reload();
        this.todo = new Todo();
      },
      err => console.log(err)
    );
  };

  updateTodo = function(todo) {
    this.todoService.update(todo).subscribe(
      data => {
        this.reload();
        this.selected = null;
        this.editTodo = null;
      },
      err => console.log(err)
    );

  };

  deleteTodo = function(id) {
    this.todoService.destroy(id).subscribe(
      data => this.reload(),
      err => console.log(err)
    );
  };

  setEditTodo = function () {
    this.editTodo = Object.assign({}, this.selected);
  };

  hideEditView = function() {
    this.editTodo = null;
  };

  reload = function() {
    this.todoService.index().subscribe(
      data => {
        this.todos = data;
        console.log('In first subscript');

      },
      error => console.log(error)
    );
  };

  // generated helpers
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.reload();
  }

}
