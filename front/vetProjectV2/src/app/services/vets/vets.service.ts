import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Veterinario } from '../../models/veterinario'

@Injectable({
  providedIn: 'root'
})
export class VetsService {

  api = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { 

  }

  createVet(pnombreclinica, pnombreVet, ptelefono, pemail, ppassword){
    return this.http.post(`${this.api}/regVet/new`,{
      nombreclinica: pnombreclinica,
      nombreVet: pnombreVet,
      telefono: ptelefono,
      email: pemail,
      password: ppassword
    }).toPromise()
  }
}
