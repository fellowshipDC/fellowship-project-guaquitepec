import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { FooterComponent } from './footer/footer.component';
import { SaludcomunitariaComponent } from './saludcomunitaria/saludcomunitaria.component';
import { VinculosolComponent } from './vinculosol/vinculosol.component';
import { EducacionFormComponent } from './educacion-form/educacion-form.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { EconomiaSolComponent } from './economia-sol/economia-sol.component';
import { NuestraFilosofiaComponent } from './nuestra-filosofia/nuestra-filosofia.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    QuienesSomosComponent,
    QueHacemosComponent,
    FooterComponent,
    SaludcomunitariaComponent,
    VinculosolComponent,
    EducacionFormComponent,
    ProduccionComponent,
    EconomiaSolComponent,
    NuestraFilosofiaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
