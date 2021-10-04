import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGardServiceAdminService {

  constructor(public router: Router,
    public authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log( this.authService.sroleuser );

    if ( this.authService.sroleuser!="USER"  )
        return true;
    
  this.router.navigate(['listProvider']);
    return false;
    }
}
