import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegVetComponent } from './components/reg-vet/reg-vet.component';
import { LogVetComponent } from './components/log-vet/log-vet.component';
import { VetHomeComponent } from './components/vet-home/vet-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    RegVetComponent,
    LogVetComponent,
    VetHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
