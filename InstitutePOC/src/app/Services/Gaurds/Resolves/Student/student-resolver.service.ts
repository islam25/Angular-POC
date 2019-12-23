import { Injectable } from '@angular/core';
import { StudentService } from 'src/app/Services/Student/student.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentResolverService implements Resolve<Student>{

  constructor(private studentService: StudentService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Student>  {
    
      let id = +route.queryParamMap.get("id");  
    return this.studentService.Get(id);
  }
}
