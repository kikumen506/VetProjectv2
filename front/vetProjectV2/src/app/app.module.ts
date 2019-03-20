import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegVetComponent } from './components/reg-vet/reg-vet.component';
import { LogVetComponent } from './components/log-vet/log-vet.component';
import { VetHomeComponent } from './components/vet-home/vet-home.component';

import { VetsService } from './services/vets/vets.service';
import { LogVetService } from './services/logvet/log-vet.service';
import { RegClienteComponent } from './components/reg-cliente/reg-cliente.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { RegMascotaComponent } from './components/reg-mascota/reg-mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    RegVetComponent,
    LogVetComponent,
    VetHomeComponent,
    RegClienteComponent,
    MascotasComponent,
    ClienteComponent,
    RegMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    VetsService,
    LogVetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
