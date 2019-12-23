import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private Users: User[] = [
    new User(1 , 'Admin' , 'Admin' , 'Admin'),
    new User(2 , 'Eslam' , 'User' , '123'),
    new User(3 , 'Staff' , 'Staff' , '123')
  ]

  constructor() { }

  CheckUser(userName: string, password: string): Observable<User>{
    return of(this.Users.find(u => u.Name.toLocaleLowerCase() == userName.toLocaleLowerCase() && u.Password.toLocaleLowerCase() == password.toLocaleLowerCase()));
  }

}
