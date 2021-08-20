import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    FormsModule, RouterModule
  ],
  exports:[
    NavBarComponent,
    BuscarComponent
  ]
})
export class SharedModule { }
