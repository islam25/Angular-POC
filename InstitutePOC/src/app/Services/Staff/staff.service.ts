import { Injectable } from '@angular/core';
import { Staff } from 'src/app/Models/Staff';
import { IRepositoryService } from '../Shared/irepository.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StaffService implements IRepositoryService<Staff> {

  constructor() { }
  Staffs: Staff[] = 
   [
     new Staff(1 , 'Eslam' , 100 , 'SD'),
     new Staff(2 , 'Amir' , 200 , 'Java')
   ];
   GetAll(): Observable<Staff[]> {
     return of(this.Staffs);
   }
   Get(id: Number): Observable<Staff> {
     return of(this.Staffs.find(s => s.Id == id));
   }
   Add(item: Staff): void {
     this.Staffs.push(item);
   }
   Delete(id: Number): void {
     let index = this.Staffs.findIndex(s=> s.Id == id);
     this.Staffs.splice(index , 1);
   }
   Update(item: Staff): void {
     let Staff = this.Staffs.find(s => s.Id == item.Id);
     Staff.Name = item.Name;
     Staff.Salary = item.Salary;
     Staff.DepartmentName = item.DepartmentName;
   }
}