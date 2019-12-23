import { Injectable } from '@angular/core';
import { Staff } from 'src/app/Models/Staff';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StaffService } from 'src/app/Services/Staff/staff.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffResolverService implements Resolve<Staff>{

  constructor(private staffService: StaffService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Staff>  {
    let id = +route.queryParamMap.get("id");
    return this.staffService.Get(id);
 }
}
