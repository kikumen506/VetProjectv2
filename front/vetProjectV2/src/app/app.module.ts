import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegVetComponent } from './components/reg-vet/reg-vet.component';
import { LogVetComponent } from './components/log-vet/log-vet.component';
import { VetHomeComponent } from './components/vet-home/vet-home.component';

import { VetsService } from './services/vets/vets.service';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    VetsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
