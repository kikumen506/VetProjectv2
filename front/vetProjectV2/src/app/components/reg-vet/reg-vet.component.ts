import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { VetsService } from '../../services/vets/vets.service';


@Component({
  selector: 'app-reg-vet',
  templateUrl: './reg-vet.component.html',
  styleUrls: ['./reg-vet.component.css']
})
export class RegVetComponent implements OnInit {

  form: FormGroup

  constructor(private vetservice: VetsService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombreclinica: new FormControl('', Validators.pattern(/[a-zA-Z Á-Úá-ú][^1234567890]+$/)),
      nombreVet: new FormControl('', Validators.pattern(/[a-zA-Z Á-Úá-ú][^1234567890]+$/)),
      telefono: new FormControl(''),
      email: new FormControl('',Validators.pattern(/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/)),
      password: new FormControl('', Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)),
    })
  }

  saveVet(){
    
    this.vetservice.createVet(
      this.form.value.nombreclinica,
      this.form.value.nombreVet,
      this.form.value.telefono,
      this.form.value.email,
      this.form.value.password
      ).then(
      res => {
        console.log(res)
        this.router.navigate(['/logvet'])
      },
      err => console.error(err)
    )
  }

}
