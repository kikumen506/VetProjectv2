import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotasService } from 'src/app/services/mascotas/mascotas.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: any = []
  mascotas: any = []

  clientId: number

  constructor(
    public httpClient: HttpClient,
    public clientesService: ClientesService,
    public activatedRoute: ActivatedRoute,
    public mascotasService: MascotasService,
    public router: Router) {

  }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params
    if (params.id) {
      this.clientId =params.id
      this.clientesService.getById(params.id).subscribe(
        res => {
          console.log(res)
          this.cliente = res
        },
        err => console.log(err)
      )
    }

    if (params.id) {
      this.mascotasService.getByClient(params.id).subscribe(
        res => {
          console.log(res)
          this.mascotas = res
        },
        err => console.log(err)
      )
    }

  }

  deleteClient(id) {
    console.log(id)
    this.clientesService.deleteClient(id).then(
      res => {
        console.log(res)
        this.clientesService.getByVet().then(
          res => {
            console.log(res)

            this.cliente = res
            this.router.navigate(['/vethome'])

          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }


}
