import { HttpClient } from '@angular/common/http';

import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PagesServiceService } from '../pages-service.service';



@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styles: [
    `
    /* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
    

    `
  ]
})
export class OpcionesComponent implements OnInit {

  //@Input ('pokemon') pokemon:any;
  
  pokemon!:number;

  pokeOpt:string[]=[]
  

  showPokemon:Boolean= false;

  respuesta!:number;
  showAnswer:boolean=false;

  message!:string;

  nombreFinal!:string

  img:string= '';

  constructor(private pagesService:PagesServiceService,
    private http:HttpClient) { }

  ngOnInit(): void {


    this.cargarPokemons()
    
    this.getPokemons()

   
  }

  cargarPokemons(){


    return this.pagesService.getPokemons().subscribe
    ((resp:any) =>{


    })
    
  }

  // Un array de numeros 650

  getPokemons = async() => {


    // nuevo del EcmaScript, crear un arreglo de otro arreglo
    const pokemonsTotales = Array.from(Array(650))
        // mapear el arreglo para darle un valor a cada posicion
    const mixedPokemons= pokemonsTotales
    .map((_, index) => index + 1)

    // para hacerlos aleatorios
    .sort(() => Math.random() - 0.5)
    
    // dejamos 4 que serán las opciones
    const options = mixedPokemons.splice(0,4)

    

    console.log('4 aleatorios de 650', options);

    // Aqui cogemos un aleatorio de los 4 que tenemos
    const randomInt = Math.floor(Math.random()*4)
    this.respuesta= options[randomInt]

    

    this.getPokemonFinal(options[0])
    this.getPokemonFinal(options[1])
    this.getPokemonFinal(options[2])
    this.getPokemonFinal(options[3])





    console.log(' aleatorio de los 4', this.respuesta);

    this.img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.respuesta}.svg`;

    

}

getPokemonFinal = (pok1:number) => {

 this.pagesService.getPokemon(pok1).subscribe(resp=>{

  this.pokeOpt.push(resp.name)
  return resp.name
  
 })

}

checkAnswer(pokemonId:string){

  this.showPokemon = true
  this.showAnswer  = true

  this.pagesService.getPokemon(this.respuesta).subscribe(resp=>{

    
    if (pokemonId === resp.name){
      this.message = `correcto, es:  ${resp.name}!`
      //console.log('correcto? ', pokemonId, resp.name);
    }else{
      this.message = `Incorrecto!, el pokemon correcto es:  ${resp.name}`
      //console.log('incorrecto? ', pokemonId, resp.name);
    }
    
   })

  

   

  

 

  
  
}

 

}