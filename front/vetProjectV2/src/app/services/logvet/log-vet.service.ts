import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogVetService {

  token: any;

  api = 'http://localhost:3000/api/logvet'

  constructor(private httpClient: HttpClient,public router: Router) { 

  }

  logIn(pnombreVet, ppasword){
    return this.httpClient.post(`${this.api}`, {nombreVet: pnombreVet, password: ppasword}).toPromise()
  }

  logOut(){
    localStorage.removeItem('token'),
    this.router.navigate(['vetHome'])
  }
}
