import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { DatePipe } from '@angular/common';
import { IncompletePipe } from './incomplete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    IncompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   ],
  providers: [
    TodoService,
    DatePipe,
    IncompletePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
