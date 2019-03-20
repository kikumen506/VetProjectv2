import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegVetComponent } from './components/reg-vet/reg-vet.component';
import { LogVetComponent } from './components/log-vet/log-vet.component';
import { VetHomeComponent } from './components/vet-home/vet-home.component';
import { RegClienteComponent } from './components/reg-cliente/reg-cliente.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';

import { LoginGuard } from './guards/login/login.guard';
import { NotLoggedGuard } from './guards/notLogged/not-logged.guard';
import { RegMascotaComponent } from './components/reg-mascota/reg-mascota.component';
import { EditMascotaComponent } from './components/edit-mascota/edit-mascota.component';
import { HeroUsuariosComponent } from './components/hero-usuarios/hero-usuarios.component';





const routes: Routes = [

  {path:'', pathMatch:'full', component:HomeComponent},

  {path:'home', component:HomeComponent},
  {path:'regvet', component:RegVetComponent},
  {path:'logvet', component:LogVetComponent, canActivate:[NotLoggedGuard]},
  {path:'vethome', component:VetHomeComponent, canActivate:[LoginGuard]},
  
  {path:'vethome/cliente/:id', component:ClienteComponent, canActivate:[LoginGuard]},

  {path:'reg-cliente', component:RegClienteComponent, canActivate:[LoginGuard]},
  {path:'edit-cliente/:id', component:RegClienteComponent, canActivate:[LoginGuard]},
  {path:'vethome/cliente/mascota/:id', component:MascotasComponent, canActivate:[LoginGuard]},
  {path:'reg-mascota/:clientId', component: RegMascotaComponent, canActivate:[LoginGuard]},
  {path:'edit-mascota/:id', component:EditMascotaComponent, canActivate:[LoginGuard]},
  {path:'index', component: HeroUsuariosComponent},

  { path: '**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
