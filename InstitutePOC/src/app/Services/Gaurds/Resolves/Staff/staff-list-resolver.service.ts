import { Injectable } from '@angular/core';
import { StaffService } from 'src/app/Services/Staff/staff.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Staff } from 'src/app/Models/Staff';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffListResolverService implements Resolve<Staff[]> {
  
  constructor(private staffService: StaffService , private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<Staff[]>  {
    
      return this.staffService.GetAll().pipe(map(data => {
        if(data)
          return data;
        else
          this.router.navigate(['/home']);
      }));
  }

}
