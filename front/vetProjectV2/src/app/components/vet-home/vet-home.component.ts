import { Component, OnInit } from '@angular/core';
import { LogVetService } from 'src/app/services/logvet/log-vet.service';
import { VetsService } from 'src/app/services/vets/vets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-home',
  templateUrl: './vet-home.component.html',
  styleUrls: ['./vet-home.component.css']
})
export class VetHomeComponent implements OnInit {


  clinica: any 

  constructor(public logVetService: LogVetService, public vetService: VetsService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    
    this.vetService.getByToken().then(
        res =>{
          console.log(res)
          this.clinica = res
        },
        err => console.log(err)
    )
    
  }

  // getVetById(id){
  //   this.vetService.getById(id).then(
  //     res =>{
  //     console.log(res)
  //   },
  //   err => console.error(err)
  //   )
    

  // }

}
