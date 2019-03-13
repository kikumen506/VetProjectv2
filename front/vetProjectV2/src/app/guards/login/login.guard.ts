import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogVetService } from '../../services/logvet/log-vet.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private logvetservice: LogVetService, private router: Router){
    
  }
  
  canActivate(){

   
   
    if(this.logvetservice.logged()){
    
      console.log('estas dentro')
      return true
    } else {
      
      this.router.navigate(['/home'])
      console.log('registrate')
      
    }
   
  }
}
