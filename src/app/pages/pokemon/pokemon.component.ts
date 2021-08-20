import { error } from '@angular/compiler/src/util';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon, Ability } from '../../interfaces/pokemon.interface';
import { PagesServiceService } from '../pages-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
    `
    img{

    height: 200px;
    position: relative;
    right: 0%;
    }

    .card{
      background: linear-gradient(120deg, #BF953F, #B38728, #FBF5B7, #AA771C);
    }
    
    
    `
  ]
})
export class PokemonComponent implements OnInit, OnDestroy {

  nombre:string=''

  img:string= ''

  habilidades:any[]=[]
  

  pokemon!:Pokemon
  //importante para hacer el unsubscribe
  paramsSubscription! : Subscription;


  constructor(private route:Router, private activatedRoute: ActivatedRoute, private pagesService:PagesServiceService) { }
 



  ngOnInit(): void {



    this.paramsSubscription = this.activatedRoute.params.subscribe(({pokemonId})=>{
      
      if(isNaN(pokemonId) || pokemonId>1000) pokemonId=1

      this.getPokemon(pokemonId)
    })
    
  }

  getPokemon(pokemon:number){

      this.pagesService.getPokemon(pokemon).subscribe(({name,id,abilities})=>{

      this.nombre=name
      let [hab1,hab2]= abilities

      this.habilidades.push(hab1.ability.name)
      if (hab2){
        this.habilidades.push(hab2.ability.name)
      }
      //Para que saque la imagen grande o pequeña
      if (id<=650){

        this.img= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        console.log('imagen grande');
      }else{

        this.img= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        console.log('imagen pequeña');
      }

      
      //console.log(this.paramsSubscription);
      

      }
      
    ,(err:any)=>{
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
