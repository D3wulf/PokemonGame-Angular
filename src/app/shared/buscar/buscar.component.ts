import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesServiceService } from '../../pages/pages-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string=''

  constructor(private ps:PagesServiceService, private route:Router) { }

  ngOnInit(): void {


  }

  buscar(termino:string){

   

    this.ps.getPokemon(this.termino).subscribe(pokemon=>{
      
      this.route.navigateByUrl(`/pokemon/${pokemon.id}`)
    },(error:any)=>{
      Swal.fire('Error', 'No has escrito bien el nombre', 'warning')
    })
  }



}
