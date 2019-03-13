import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogVetService } from '../../services/logvet/log-vet.service'

@Component({
  selector: 'app-log-vet',
  templateUrl: './log-vet.component.html',
  styleUrls: ['./log-vet.component.css']
})
export class LogVetComponent implements OnInit {

  form: FormGroup

  constructor(private logVetService: LogVetService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nombreVet: new FormControl(''),
      password: new FormControl('', [Validators.required,Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)]),
    })
  }

  logVet(){

    this.logVetService.logIn(

      this.form.value.nombreVet,
      this.form.value.password,

    ).then((res)=>{

      console.log(res)
      if(res['error']){

        alert('usuario o password incorrectos')

      } else {

        localStorage.setItem('token', res.toString())
        this.router.navigate(['/vethome'])
      }
    })
  }

}
