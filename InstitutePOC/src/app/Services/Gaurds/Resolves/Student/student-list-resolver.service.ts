import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/Student/student.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentListResolverService implements Resolve<Student[]>{

  constructor(private studentService: StudentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Student[]>  {
      
    return this.studentService.GetAll().pipe(map(data => {
      if(data)
        return data;
      else
        this.router.navigate(['/home']);
    }));
 }}
