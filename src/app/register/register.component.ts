import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User();

  register(user) {
    this.authService.register(user).subscribe(
      data => this.router.navigateByUrl('todos'),
      err => console.log(err)
    );
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

}
