import { error } from '@angular/compiler/src/util';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from '../../interfaces/pokemon.interface';
import { PagesServiceService } from '../pages-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit, OnDestroy {

  nombre:string=''

  img:string= ''
  //importante para hacer el unsubscribe
  paramsSubscription! : Subscription;


  constructor(private route:Router, private activatedRoute: ActivatedRoute, private pagesService:PagesServiceService) { }
 



  ngOnInit(): void {



    this.paramsSubscription = this.activatedRoute.params.subscribe(({pokemonId})=>{
      
      if(isNaN(pokemonId) || pokemonId>1000) pokemonId=1
      
      

      this.getPokemon(pokemonId)
    })
    
    
  }

  getPokemon(pokemon:string){

    const pokemons = this.pagesService.getPokemon(pokemon).subscribe(pokemon=>{

      
      if(!pokemon){
        console.log('no hay pokemon');

      }else{
      this.nombre= pokemon.name
      console.log(pokemon);

      this.img= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
      //console.log(this.paramsSubscription);

      }
      
    },err=>{
      // Por si no viene pokemon
      console.log(err);
      this.route.navigateByUrl('/')
    }

      
    )
    
    
    
    

  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    
  }

  

}
