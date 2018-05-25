import { Injectable } from '@angular/core';
import { Todo } from './models/todo';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://localhost:8080/api/todos';

  index() {
    return this.http.get<Todo[]>(this.url)
        .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('KABOOM');
            })
        );
  }

  create(todo: Todo) {
    todo.description = '';
    todo.completed = false;

    return this.http.post<Todo>(this.url, todo)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  update(todo) {
    return this.http.put<Todo>(this.url + '/' + todo.id, todo)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM');
          })
        );
  }

  destroy(id) {
    return this.http.delete(this.url + '/' + id)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM');
          })
        );
  }


  constructor(private http: HttpClient) { }

}
