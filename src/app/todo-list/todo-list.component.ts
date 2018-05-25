import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';
import { IncompletePipe } from '../incomplete.pipe';

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

  showComplete = false;

  // class methods
  getNumTodos = function() {
    return this.incomplete.transform(this.todos).length;
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
      data => this.todos = data,
      error => console.log(error)
    );
  };

  warnUser = function() {
    const number = this.getNumTodos();
    if (number >= 10) {
      return 'red';
    } else if (number >= 5 && number < 10) {
      return 'yellow';
    } else {
      return 'green';
    }
  };

  checkCompleted = function(todo) {
    return todo.completed ? 'strikeout' : '';
  };

  // generated helpers
  constructor(private todoService: TodoService,
              private incomplete: IncompletePipe) { }

  ngOnInit() {
    this.reload();
  }

}
