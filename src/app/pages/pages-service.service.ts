import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {

  poke1!:Pokemon | undefined;
  poke2!:Pokemon | undefined;
  poke3!:Pokemon | undefined;
  poke4!:Pokemon | undefined;

  baseUrl:String=  'https://pokeapi.co/api/v2/pokemon'

  pokeOptions:Pokemon[]=[];

  constructor(private http:HttpClient) { }

  getPokemon(pokemon:any):Observable<Pokemon>{

    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    

    //return this.http.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`);
  }

  getPokemons(){

    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon`);
    

    //return this.http.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`);
  }

  
   

   
    



}
