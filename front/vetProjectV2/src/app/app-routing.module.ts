import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegVetComponent } from './components/reg-vet/reg-vet.component';
import { LogVetComponent } from './components/log-vet/log-vet.component';
import { VetHomeComponent } from './components/vet-home/vet-home.component';

const routes: Routes = [

  {path: '', pathMatch:'full', component:HomeComponent},

  {path:'regvet', component:RegVetComponent},
  {path:'logvet', component:LogVetComponent},
  {path:'vetHome', component:VetHomeComponent},

  { path: '**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
