import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OpcionesComponent } from './opciones/opciones.component';



@NgModule({
  declarations: [

    OpcionesComponent,
    ImagenesComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OpcionesComponent,
    ImagenesComponent,
    MainPageComponent
  ]
  
})
export class PagesModule { }
