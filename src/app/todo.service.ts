import { Injectable } from '@angular/core';
import { Todo } from './models/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';


import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://localhost:8080/api/todos';

  index() {
    if (!this.authSerivce.checkLogin()) {
      this.router.navigateByUrl('login');
    }

    const token = this.authSerivce.getToken();
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${token}`);

    return this.http.get<Todo[]>(this.url, {headers})
        .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('KABOOM');
            })
        );
  }

  show(id: number) {
    const token = this.authSerivce.getToken();
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${token}`);

    return this.http.get<Todo>(this.url + '/' + id, {headers})
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

  update(todo: Todo) {
    if (todo.completed) {
      todo.completeDate = this.datePipe.transform(Date.now(), 'shortDate');
    } else {
      todo.completeDate = '';
    }
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


  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
    private authSerivce: AuthService,
    private router: Router
  ) { }

}
