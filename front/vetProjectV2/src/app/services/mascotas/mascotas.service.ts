import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  api = 'http://localhost:3000/api'

  constructor(public httpClient: HttpClient) { 

  }

  getByClient(pid){
    return this.httpClient.post(`${this.api}/mascotas/mascotasCliente`, {id: pid}).toPromise()
  }
}
