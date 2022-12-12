import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuAsideComponent } from './componentes/menu-aside/menu-aside.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { BarraInicioComponent } from './componentes/barra-inicio/barra-inicio.component';
import { MainComponent } from './pages/main/mainP.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuAsideComponent,
    CarouselComponent,
    ServiciosComponent,
    PromocionesComponent,
    NosotrosComponent,
    ContactoComponent,
    BarraInicioComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
