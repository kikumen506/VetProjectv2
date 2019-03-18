import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api = 'http://localhost:3000/api'

  

  constructor(private httpClient: HttpClient) { 

  }


  // obtener clientes clinica mediante el token de la clinica
  getByVet(){

    let tokenVar = localStorage.getItem('token')
    return this.httpClient.post(`${this.api}/clientes/clientesVet`, {token: tokenVar}).toPromise()

  }

  // borrar clientes mediante token de clinica

  deleteClient(pid){

    

    return this.httpClient.post(`${this.api}/clientes/clientesVet/delete`, {id: pid}).toPromise()
  }
}
