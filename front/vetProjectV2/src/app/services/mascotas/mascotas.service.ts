import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  api = 'http://localhost:3000/api'

  constructor(public httpClient: HttpClient) { 

  }


  // mascotas por cliente

  getByClient(id){
    return this.httpClient.get(`${this.api}/mascotas/mascotasCliente/${id}`)
  }

  //  obtener mascota
  getPet(id){
    return this.httpClient.get(`${this.api}/mascotas/mascotasCliente/${id}`)
  }
}
