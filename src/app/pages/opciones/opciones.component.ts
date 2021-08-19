import { HttpClient } from '@angular/common/http';

import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PagesServiceService } from '../pages-service.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styles: [ ]
})
export class OpcionesComponent implements OnInit {

  pokemon!:number;
  respuesta!:number;

  pokeOpt:string[]=[];
  options:number[]=[];

  showPokemon:Boolean= false;
  //showAnswer:boolean=false;

  message!:string;
  nombreFinal!:string;
  img:string= '';

  vidas:number = 3
  aciertos:number=0;

  

  constructor(private pagesService:PagesServiceService,
    private http:HttpClient) { }

  ngOnInit(): void {
      
    this.logicaPokemons()

  }

  logicaPokemons = async() => {

    // esto devuelve un array de 4 numeros aleatorios
    this.options= this.pagesService.logicaPokemon()

    // Aqui cogemos un aleatorio de los 4 que tenemos
    const randomInt = Math.floor(Math.random()*4)
    // El que será elegido como válido
    this.respuesta= this.options[randomInt]

    // Obtenemos el nombre de los 4 numeros
    this.getPokemonFinal(this.options[0])
    this.getPokemonFinal(this.options[1])
    this.getPokemonFinal(this.options[2])
    this.getPokemonFinal(this.options[3])

    //console.log(' aleatorio de los 4', this.respuesta);

    this.img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.respuesta}.svg`; 

}

 // Asignamos el pokemon por el numero que enviamos y mandamos su nombre
getPokemonFinal = (pok1:number) => {

  this.pagesService.getPokemon(pok1).subscribe(resp=>{
  this.pokeOpt.push(resp.name)
  return resp.name
  
 })
}

checkAnswer(pokemonId:string){

  this.showPokemon = true
  //this.showAnswer  = true

  this.pagesService.getPokemon(this.respuesta).subscribe(resp=>{

    
    if (pokemonId === resp.name){
      
      this.message = `Correcto! Es ${resp.name}`

      Swal.fire({
        title: 'Correcto!',
        text: `¡Es ${resp.name}!`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.continuar()
        }
      })

      this.aciertos++;

    }else{
      
      this.message = `Incorrecto! Era ${resp.name}!`
      this.vidas--;;

      Swal.fire({
        title: 'Incorrecto!',
        text: `¡Es ${resp.name}! , te queda/n ${this.vidas} vidas!`,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.continuar()
        }
      })

      // Nos quedamos sin vidas //

      if(this.vidas === 0){
        Swal.fire('No te quedan Vidas!', `Has acertado ${this.aciertos}!. Pulsa Ok para empezar`,'error' )
        Swal.fire({
          title: `Oh, ese último era ${resp.name}. No te quedan Vidas!`,
          text: `Has acertado ${this.aciertos}!. Pulsa Ok para empezar`,
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Empezar partida'
        }).then((result) => {
          if (result.isConfirmed) {
            this.newGame()
          }
        })
        
      }
    }

   })
}

continuar(){
  this.showPokemon = false
  this.pokeOpt  = []
  this.logicaPokemons()   
  
  
}

newGame() {
  
  this.showPokemon = false
  this.pokeOpt  = []
  this.vidas= 3;
  this.aciertos=0;
  
  this.logicaPokemons()         
}

}
