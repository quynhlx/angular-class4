import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login().subscribe(
      (resp) => {
        // dang nhap thanhcong
        console.log(resp);
        this.router.navigate(['/']);
      },
      () => {
        //
      }
    );
  }
}
