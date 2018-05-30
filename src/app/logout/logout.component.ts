import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logout() {
    this.authSerive.logout();

    if (!this.authSerive.checkLogin()) {
      this.rouer.navigateByUrl('home');
    }
  }

  constructor(private authSerive: AuthService,
              private rouer: Router) { }

  ngOnInit() {
  }

}
