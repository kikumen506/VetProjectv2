import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../../models/veterinario';
import { VetsService } from '../../services/vets/vets.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reg-vet',
  templateUrl: './reg-vet.component.html',
  styleUrls: ['./reg-vet.component.css']
})
export class RegVetComponent implements OnInit {

  veterinario: Veterinario = {

    nombreclinica:'',
    nombreVet:'',
    telefono:'',
    email:'',
    password:'',

  }

  constructor(private vetservice: VetsService, private router: Router) { }

  ngOnInit() {
  }

  saveVet(){
    this.vetservice.createVet(this.veterinario).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/logvet'])
      },
      err => console.error(err)
    )
  }

}
