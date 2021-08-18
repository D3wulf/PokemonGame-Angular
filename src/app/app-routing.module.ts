import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutComponent } from './pages/about/about.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { JuegoComponent } from './pages/juego/juego.component';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent,
    pathMatch:'full'
  },{
    path:'about',
    component:AboutComponent
  },{
    path:'juego',
    component:JuegoComponent
  },{

    path:':pokemonId',
    component:PokemonComponent
  },
  
  {

    path:'**',
    component:MainPageComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
