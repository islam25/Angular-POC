import { Injectable } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { Observable, of } from 'rxjs';
import { IRepositoryService } from '../Shared/irepository.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements IRepositoryService<Student> {

  constructor() { }
     Students: Student[] = 
   [
     new Student(1 , 'Eslam' , 'SD'),
     new Student(2 , 'Amir' , 'Java')
   ];
   GetAll(): Observable<Student[]> {
     return of(this.Students);
   }
   Get(id: Number): Observable<Student> {
     return of(this.Students.find(s => s.Id == id));
   }
   Add(item: Student): void {
     this.Students.push(item);
   }
   Delete(id: Number): void {
     let index = this.Students.findIndex(s=> s.Id == id);
     this.Students.splice(index , 1);
   }
   Update(item: Student): void {
     let student = this.Students.find(s => s.Id == item.Id);
     student.Name = item.Name;
     student.DepartmentName = item.DepartmentName;
   }
}