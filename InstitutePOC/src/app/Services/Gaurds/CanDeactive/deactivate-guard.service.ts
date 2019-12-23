import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<IDeactivateComponent>{

  route: ActivatedRouteSnapshot;
  
  constructor() { }
  
  canDeactivate(component: IDeactivateComponent, 
    currentRoute: import("@angular/router").ActivatedRouteSnapshot, 
    currentState: import("@angular/router").RouterStateSnapshot, 
    nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
      return component.canExit();
  }

}

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}