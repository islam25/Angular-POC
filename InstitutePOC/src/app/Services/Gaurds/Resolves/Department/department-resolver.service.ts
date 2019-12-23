import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ɵEmptyOutletComponent } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/Services/Department/department.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentResolverService implements Resolve<Department>{

  constructor(private departmentService: DepartmentService){} 
  
  resolve(route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<Department> {
 
    let code = +route.queryParamMap.get("code");
    return this.departmentService.Get(code);
  }

}
