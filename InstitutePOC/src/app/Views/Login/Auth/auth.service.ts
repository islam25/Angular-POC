import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  IsAdmin: boolean = false;
  IsUser: boolean = false;
  IsStaff: boolean = false;
  IsLogin: boolean = false;
  
  constructor() { }
}
