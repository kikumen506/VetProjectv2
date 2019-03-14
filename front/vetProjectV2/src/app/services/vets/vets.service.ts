import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Veterinario } from '../../models/veterinario'

@Injectable({
  providedIn: 'root'
})
export class VetsService {

  api = 'http://localhost:3000/api'

  constructor(private httpClient: HttpClient) { 

  }

  // registro clinica

  createVet(pnombreclinica, pnombreVet, ptelefono, pemail, ppassword){
    return this.httpClient.post(`${this.api}/regVet/new`,{
      nombreclinica: pnombreclinica,
      nombreVet: pnombreVet,
      telefono: ptelefono,
      email: pemail,
      password: ppassword
    }).toPromise()
  }

  // datos clinica
  
  getByToken(){
    let tokenVar = localStorage.getItem('token')
    return this.httpClient.post(`${this.api}/regvet`, {token: tokenVar}).toPromise()
  }
}
