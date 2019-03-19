import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api = 'http://localhost:3000/api'

  

  constructor(public httpClient: HttpClient) { 

  }

  //crear cliente por clinica
  newClient(pnombrecompleto, pdireccion, pdni, ppoblacion, ptelefonomovil, pemail){
    return this.httpClient.post(`${this.api}/clientes/clientesVet/new`, {
      nombrecompleto: pnombrecompleto,
      direccion: pdireccion,
      dni: pdni,
      poblacion: ppoblacion,
      telefonomovil: ptelefonomovil,
      email: pemail,
      token: localStorage.getItem('token')
    }).toPromise()
  }


  // obtener clientes clinica mediante el token de la clinica
  getByVet(){

    let tokenVar = localStorage.getItem('token')
    return this.httpClient.post(`${this.api}/clientes/clientesVet`, {token: tokenVar}).toPromise()

  }

  //  obtener cliente
  getById(id){
    return this.httpClient.get(`${this.api}/clientes/clientesVet/${id}`)
  }

  // borrar clientes mediante token de clinica

  deleteClient(pid){
    return this.httpClient.post(`${this.api}/clientes/clientesVet/delete`, {id: pid}).toPromise()
  }

  //actualizar cliente

  updateClient(id, pnombrecompleto, pdireccion, pdni, ppoblacion, ptelefonomovil, pemail){
    return this.httpClient.post(`${this.api}/clientes/clientesVet/edit/${id}`, {
      nombrecompleto: pnombrecompleto,
      direccion: pdireccion,
      dni: pdni,
      poblacion: ppoblacion,
      telefonomovil: ptelefonomovil,
      email: pemail,
    }).toPromise()
  }
}
