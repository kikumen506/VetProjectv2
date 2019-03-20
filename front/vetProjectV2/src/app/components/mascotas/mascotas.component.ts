import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { MascotasService } from 'src/app/services/mascotas/mascotas.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  mascota: any = [];
  cliente: any = [];
  
  constructor(
    public mascotasService: MascotasService,
    public clientesService: ClientesService,
    public httpClient: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router, ) { 

  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    if (params.id) {
      this.mascotasService.getPet(params.id).subscribe(
        res => {
          console.log(res)
          this.mascota = res
        },
        err => console.log(err)
      )
    }

    if (params.id) {
      this.clientesService.getById(params.id).subscribe(
        res => {
          console.log(res)
          this.cliente = res
        },
        err => console.log(err)
      )
    }
  }

  deletePet(id){
    this.mascotasService.deletePet(id).then(
      res => {
        this.mascota = res
        this.router.navigate(['/vethome/cliente/:id'])
      },
      err => console.log(err)
    )
  }

}
