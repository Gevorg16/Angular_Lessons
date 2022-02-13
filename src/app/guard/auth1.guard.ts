import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {

  constructor(public router: Router){

  }

  canActivate(){
    if (localStorage.getItem('access_token')) {
      this.router.navigateByUrl('/profile')
      return false;
    }
    return true;
  }
  
}
