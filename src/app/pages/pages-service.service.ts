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

}
