import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { MascotasService } from 'src/app/services/mascotas/mascotas.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  mascota: any = []

  constructor(
    public mascotasService: MascotasService,
    public httpClient: HttpClient,
    public activatedRoute:ActivatedRoute,) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    if(params.id){
      this.mascotasService.getPet(params.id).subscribe(
        res =>{
          console.log(res)
          this.mascota = res
        },
        err => console.log(err)
      )
    }
  }

}
