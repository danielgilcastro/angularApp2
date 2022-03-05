import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { OfertaComponent } from './oferta/oferta.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'diversao',component:DiversaoComponent},
  {path:'restaurantes',component:RestaurantesComponent},
  {path:'oferta',component:OfertaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
