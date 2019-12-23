import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/Users/users.service';
import { User } from 'src/app/Models/User';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  IsNotValid: boolean = false;
  LoginInfo = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private usersService: UsersService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit() {
    debugger
    this.usersService.CheckUser(this.LoginInfo.value.userName, this.LoginInfo.value.password).subscribe(data => {
      if (data) {
        if (data.Type == 'Admin')
          this.auth.IsAdmin = true;
        else if (data.Type == 'User')
          this.auth.IsUser = true;
        else if (data.Type == 'Staff')
          this.auth.IsStaff = true;

        this.auth.IsLogin = true;
        this.router.navigate(['/home']);
      }
      else
        alert('Your user name or password wrong')
    });
  }
}
