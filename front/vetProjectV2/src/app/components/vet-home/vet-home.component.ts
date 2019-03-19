import { Component, OnInit } from '@angular/core';
import { LogVetService } from 'src/app/services/logvet/log-vet.service';
import { VetsService } from 'src/app/services/vets/vets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { error } from '@angular/compiler/src/util';
import { MascotasService } from 'src/app/services/mascotas/mascotas.service';

@Component({
  selector: 'app-vet-home',
  templateUrl: './vet-home.component.html',
  styleUrls: ['./vet-home.component.css']
})
export class VetHomeComponent implements OnInit {


  clinica: any 
  clientes: any = []
  mascotas: any = []

  constructor(public logVetService: LogVetService, public vetService: VetsService, public activatedRoute: ActivatedRoute, public clientesService: ClientesService, public mascotasService: MascotasService, private router: Router) { 

  }

  ngOnInit() {
    
    this.vetService.getByToken().then(
      res =>{
          // console.log(res)
        this.clinica = res
      },
      err => console.log(err)
    )
    
    
    this.clientesService.getByVet().then(
      res => {
      console.log(res)
  
      this.clientes = res
        
      },
      err => console.log(err)
    )
    
    
    
    
  }

  deleteClient(id){
    console.log(id)
    this.clientesService.deleteClient(id).then(
      res => {
        console.log(res)
        this.clientesService.getByVet().then(
          res => {
          console.log(res)
      
          this.clientes = res
            
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }

  getPets(id){
    console.log(id)
    this.mascotasService.getByClient(id).then(
      res => {
        console.log(res)
        this.clientesService.getByVet().then(
          res => {
          console.log(res)
      
          this.mascotas = res
            
          },
          err => console.log(err)
        )
        
      },
      err => console.log(err)
    )
  }

  
  
  

  

}
