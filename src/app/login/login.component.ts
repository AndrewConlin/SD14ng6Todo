import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  login(user) {
    this.authService.login(user.username, user.password).subscribe(
      data => this.router.navigateByUrl('todos'),
      err => console.log(err)
    );
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

}
