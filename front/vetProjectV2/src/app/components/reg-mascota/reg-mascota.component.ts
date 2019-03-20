import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MascotasService } from 'src/app/services/mascotas/mascotas.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
    selector: 'app-reg-mascota',
    templateUrl: './reg-mascota.component.html',
    styleUrls: ['./reg-mascota.component.css']
})
export class RegMascotaComponent implements OnInit {

    form: FormGroup;

    mascota: any = [];

    edit: boolean = false;

    clientId: number

    constructor(public activatedRoute: ActivatedRoute, public router: Router, public mascotasService: MascotasService, public clientesService: ClientesService) {

    }

    ngOnInit() {
        const params = this.activatedRoute.snapshot.params

        console.log(params)

        // this.clientesService.getById(body.id)




        if (params.clientId) {
            this.clientId = params.clientId
            // this.mascotasService.getPet(params.id).subscribe(
            //     res => {
            //         console.log(res)
            //         this.mascota = res

            //         this.edit = true

            //         this.form = new FormGroup({
            //             nombre: new FormControl(this.mascota.nombre),
            //             chip: new FormControl(this.mascota.chip),
            //             animal: new FormControl(this.mascota.animal),
            //             raza: new FormControl(this.mascota.raza),
            //             sexo: new FormControl(this.mascota.sexo),
            //             fechanacimiento: new FormControl(this.mascota.fechanacimiento)
            //         })
            //     },
            //     err => console.log(err)
            // )
            this.form = new FormGroup({

                nombre: new FormControl(''),
                chip: new FormControl(''),
                animal: new FormControl(''),
                raza: new FormControl(''),
                sexo: new FormControl(''),
                fechanacimiento: new FormControl('')

            })

        } else {

            this.form = new FormGroup({

                nombre: new FormControl(''),
                chip: new FormControl(''),
                animal: new FormControl(''),
                raza: new FormControl(''),
                sexo: new FormControl(''),
                fechanacimiento: new FormControl('')

            })
        }
    }

    savePet(){
        console.log(this.clientId)
        this.mascotasService.createPet(
            this.form.value.nombre,
            this.form.value.chip,
            this.form.value.animal,
            this.form.value.raza,
            this.form.value.sexo,
            this.form.value.fechanacimiento,
            this.clientId
        ).then(
            res => {
                console.log(res)
                this.router.navigate(['/vethome/cliente', this.clientId])
            },
            err => console.error(err)
        )
    }

}
