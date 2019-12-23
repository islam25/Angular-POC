import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Login/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

  }
  Logout(){
    this.auth.IsAdmin = false;
    this.auth.IsUser = false;
    this.auth.IsStaff = false;
    this.auth.IsLogin = false;
    this.router.navigate(['/login']);
  }

}
