import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRepositoryService } from '../Shared/irepository.service';
import { Department } from 'src/app/Models/Department';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService implements IRepositoryService<Department> {

  constructor() { }
  Departments: Department[] = 
   [
     new Department(1 , 'SD'),
     new Department(2 , 'Java')
   ];
   
   GetAll(): Observable<Department[]> {
     return of(this.Departments);//.pipe(delay(3000));
   }
   Get(id: Number): Observable<Department> {
     return of(this.Departments.find(s => s.Code == id));
   }
   Add(item: Department): void {
     this.Departments.push(item);
   }
   Delete(id: Number): void {
     let index = this.Departments.findIndex(s=> s.Code == id);
     this.Departments.splice(index , 1);
   }
   Update(item: Department): void {
     let Department = this.Departments.find(s => s.Code == item.Code);
     Department.Title = item.Title;
     Department.Code = item.Code;
   }
}
