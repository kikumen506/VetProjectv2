import { Component, OnInit } from '@angular/core';
import { LogVetService } from 'src/app/services/logvet/log-vet.service';
import { VetsService } from 'src/app/services/vets/vets.service';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-vet-home',
  templateUrl: './vet-home.component.html',
  styleUrls: ['./vet-home.component.css']
})
export class VetHomeComponent implements OnInit {


  clinica: any 
  clientes: any = []

  constructor(public logVetService: LogVetService, public vetService: VetsService, public activatedRoute: ActivatedRoute, public clientesService: ClientesService) { }

  ngOnInit() {
    
    this.vetService.getByToken().then(
        res =>{
          // console.log(res)
          this.clinica = res
        },
        err => console.log(err)
    )
    
    this.getClients()
  }

  deleteClient(id){
    console.log(id)
    this.clientesService.deleteClient(id).then(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

  getClients(){
    this.clientesService.getByVet().then(
      res => {
        console.log(res)
  
        this.clientes = res
        
      },
      err => console.log(err)
    )
  }
  
  

  

}
