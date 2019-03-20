import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  api = 'http://localhost:3000/api'

  constructor(public httpClient: HttpClient) { 

  }


  //  mascotas por cliente

  getByClient(id){
    return this.httpClient.get(`${this.api}/mascotas/mascotasCliente/${id}`)
  }

  //  obtener mascota

  getPet(id){
    return this.httpClient.get(`${this.api}/mascotas/mascota/${id}`)
  }

  //  borrar mascota

  deletePet(pid){
    return this.httpClient.post(`${this.api}/mascotas/delete`, {id: pid}).toPromise()
  }

  //   generar nueva mascota ppara cada cliente

  createPet(pnombre, pchip, panimal, praza, psexo, pfechanacimiento, clientId){
    return this.httpClient.post(`${this.api}/mascotas/new`, {
      chip: pchip,
      nombre: pnombre,
      animal: panimal,
      raza: praza,
      sexo:psexo,
      fechanacimiento: pfechanacimiento,
      id: clientId
    }).toPromise()
  }

  //   actualizar datos de la mascota
  updatePet(id, pchip, pnombre, panimal, praza, psexo, pfechanacimiento){
    return this.httpClient.post(`${this.api}/mascotas/edit/${id}`, {
      chip: pchip,
      nombre: pnombre,
      animal: panimal,
      raza: praza,
      sexo: psexo,
      fechanacimiento: pfechanacimiento

    }).toPromise()
  }
}
