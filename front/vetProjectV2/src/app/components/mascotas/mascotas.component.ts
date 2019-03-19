import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  clientes: any = []

  constructor(public clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.getByVet().then(
      res => {
      console.log(res)
  
      this.clientes.id = res
        
      },
      err => console.log(err)
    )
  }

}
