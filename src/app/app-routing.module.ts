import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { MainComponent } from './pages/main/mainP.component';

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "promociones", component: PromocionesComponent},
  {path: "servicios", component: ServiciosComponent},
  {path: "**", redirectTo: "main"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
