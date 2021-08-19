import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../interfaces/pokemon.interface';
import { PagesServiceService } from '../pages-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
    `
    table img{
      height:40px;
      position:relative;
      left:0%

    }
    
    
    `

  ]
})
export class MainPageComponent implements OnInit {

  pokemons:any[]=[]
  img:string[]=[]

  desde:number=0
  total:number=0;
  resultados:number=15
  pokemonid:number=1;
  
constructor(public ps:PagesServiceService) { }

ngOnInit(): void {

 this.imgPokes(this.desde)
 this.getPokemons(this.desde)

}

imgPokes (offset:number){

 //console.log(this.resultados, this.pokemonid);
 for(let i=this.pokemonid; i<=this.resultados;i++){

  //console.log(i)
  
  this.img[i]= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[i]}.png`
  console.log(this.img[i]);
} 
}

getPokemons(offset:number){

  return this.ps.getPokemons(offset).subscribe(({results,count})=>{
    
    console.log(results);
    this.total= count
    this.pokemons= results
  })

}
cambioPag(offset:number){

  
  this.desde +=offset
  this.resultados +=offset
  this.pokemonid +=offset
  //console.log(this.resultados, this.pokemonid);

  if (this.desde<0 ) {

    this.desde=0
    this.pokemonid=1
    this.resultados=15

  }
  
  


  this.imgPokes(offset)

  return this.ps.getPokemons(this.desde).subscribe(({results})=>{
    
    this.pokemons= results

    

  })

}



}


