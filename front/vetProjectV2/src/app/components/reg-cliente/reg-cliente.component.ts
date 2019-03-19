import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-reg-cliente',
  templateUrl: './reg-cliente.component.html',
  styleUrls: ['./reg-cliente.component.css']
})
export class RegClienteComponent implements OnInit {

  form: FormGroup
  
  cliente: any = []

  edit:boolean = false

  constructor(public clientesService: ClientesService, private router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params
    if(params.id){
      this.clientesService.getById(params.id).subscribe(
        res =>{
          console.log(res)
          this.cliente = res

          this.edit = true

          this.form = new FormGroup({
            nombrecompleto: new FormControl(this.cliente.nombrecompleto),
            direccion: new FormControl(''),
            dni: new FormControl(''),
            poblacion: new FormControl(''),
            telefonomovil: new FormControl(''),
            email: new FormControl(''),
      
      
          })
        },
        err => console.log(err)
      )
      } else {

      this.form = new FormGroup({
        nombrecompleto: new FormControl(''),
        direccion: new FormControl(''),
        dni: new FormControl(''),
        poblacion: new FormControl(''),
        telefonomovil: new FormControl(''),
        email: new FormControl(''),
  
  
      })
    }

    
  }


  saveClient() {

    this.clientesService.newClient(
      this.form.value.nombrecompleto,
      this.form.value.direccion,
      this.form.value.dni,
      this.form.value.poblacion,
      this.form.value.telefonomovil,
      this.form.value.email,
    ).then(
      res => {
        console.log(res)
        this.router.navigate(['/vethome'])
      },
      err => console.error(err)
    )
  }


  updateClient(id) {

    this.clientesService.updateClient(
      id,
      this.form.value.nombrecompleto,
      this.form.value.direccion,
      this.form.value.dni,
      this.form.value.poblacion,
      this.form.value.telefonomovil,
      this.form.value.email,
    ).then(
      res => {
        console.log(res)
        this.router.navigate(['/vethome'])
      },
      err => console.error(err)
    )
  }
}
