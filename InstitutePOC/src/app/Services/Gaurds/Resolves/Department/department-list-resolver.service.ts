import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from 'src/app/Services/Department/department.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class DepartmentListResolverService implements Resolve<Department[]> {
  
  constructor(private departmentService: DepartmentService ,private router:Router) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Department[]> {
      return this.departmentService.GetAll().pipe(map(data => {
        if(data)
          return data;
        else
          this.router.navigate(['/home']);
      }))
   }
}
