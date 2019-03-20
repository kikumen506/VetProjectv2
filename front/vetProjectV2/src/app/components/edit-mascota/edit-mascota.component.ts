import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotasService } from 'src/app/services/mascotas/mascotas.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-mascota',
  templateUrl: './edit-mascota.component.html',
  styleUrls: ['./edit-mascota.component.css']
})
export class EditMascotaComponent implements OnInit {

  form: FormGroup

  mascota: any = []

  constructor(public httpClient: HttpClient, public router: Router, public activatedRoute: ActivatedRoute, public mascotasService: MascotasService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params

    if (params.id)
      this.mascotasService.getPet(params.id).subscribe(
        res => {
          console.log(res)
          this.mascota = res


          this.form = new FormGroup({
            nombre: new FormControl(''),
            chip: new FormControl(this.mascota.chip),
            animal: new FormControl(this.mascota.animal),
            raza: new FormControl(this.mascota.raza),
            sexo: new FormControl(this.mascota.sexo),
            fechanacimiento: new FormControl(this.mascota.fechanacimiento)
          })
        },
        err => console.log(err)
      )
  }

}

