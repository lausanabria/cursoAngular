import { TokenService } from './shared/services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router : Router,
    private tokenService: TokenService
    ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.tokenService.token$.subscribe(
        {
          next: (data:number) => {

            if(data!=0){
              console.log('auth fine!')
              return true;
            }
            else{
              console.log('navigate to login')
              this.router.navigate(['login']);
              return false;
            }
          },
          error: (e : Error)=>{console.log(e)}
        }
      );
    return true;
  }



}
