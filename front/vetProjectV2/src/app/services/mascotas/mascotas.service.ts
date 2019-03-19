import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  api = 'http://localhost:3000/api'

  constructor(public httpClient: HttpClient) { 

  }

  getByClient(id){
    return this.httpClient.get(`${this.api}/mascotas/mascotasCliente/${id}`)
  }
}
