import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { OpcionesComponent } from './opciones/opciones.component';



@NgModule({
  declarations: [

    OpcionesComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OpcionesComponent,
    MainPageComponent
  ]
  
})
export class PagesModule { }
