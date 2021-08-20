import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { AboutComponent } from './about/about.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { JuegoComponent } from './juego/juego.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

    OpcionesComponent,
    MainPageComponent,
    AboutComponent,
    PokemonComponent,
    JuegoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    
    
    
  ],
  exports:[
    OpcionesComponent,
    MainPageComponent,
    AboutComponent,
    PokemonComponent,JuegoComponent
    
  ]
  
})
export class PagesModule { }
