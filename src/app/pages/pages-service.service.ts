import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {



  baseUrl:String=  'https://pokeapi.co/api/v2/pokemon'

  pokeOptions:Pokemon[]=[];

  constructor(private http:HttpClient) { }

  // Pokemon Individual
  getPokemon(pokemon:any):Observable<Pokemon>{

    return this.http.get<Pokemon>(`${this.baseUrl}/${pokemon}`);
  }

  // Pokemon Array
  getPokemons(){

    return this.http.get<Pokemon>(`${this.baseUrl}`).subscribe();
    
  }

  logicaPokemon ():number[]{

    // nuevo del EcmaScript, crear un arreglo de otro arreglo
    const pokemonsTotales = Array.from(Array(650))

    // mapear el arreglo para darle un valor a cada posicion
    const mixedPokemons= pokemonsTotales
              .map((_, index) => index + 1)
                  // para hacerlos aleatorios
              .sort(() => Math.random() - 0.5)
    
      // dejamos 4 que serán las opciones
    const options = mixedPokemons.splice(0,4)

    return options;

  }

}
