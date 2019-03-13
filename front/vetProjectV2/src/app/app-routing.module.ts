import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegVetComponent } from './components/reg-vet/reg-vet.component';
import { LogVetComponent } from './components/log-vet/log-vet.component';
import { VetHomeComponent } from './components/vet-home/vet-home.component';
import { LoginGuard } from './guards/login/login.guard';
import { NotLoggedGuard } from './guards/notLogged/not-logged.guard';



const routes: Routes = [

  {path:'', pathMatch:'full', component:HomeComponent},

  {path:'home', pathMatch:'full', component:HomeComponent},
  {path:'regvet', pathMatch:'full', component:RegVetComponent},
  {path:'logvet', pathMatch:'full', component:LogVetComponent, canActivate:[NotLoggedGuard]},
  {path:'vethome', pathMatch:'full', component:VetHomeComponent, canActivate:[LoginGuard]},

  { path: '**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
