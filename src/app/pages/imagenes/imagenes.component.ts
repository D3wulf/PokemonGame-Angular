import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PagesServiceService } from '../pages-service.service';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styles: [`
 
  `
  ]
})
export class ImagenesComponent implements OnInit {

  showPokemon:Boolean= false



  pokeOpt:Pokemon[]=[]

  @Input ('pokemon') pokemon:any;

   img:string= '';

  


  constructor(private pagesService:PagesServiceService,
    private http:HttpClient) { }

  ngOnInit(): void {

    this.pagesService.pokeOptions = this.pokeOpt

    //console.log('poke img', this.pokeOpt);

    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon}.svg`;

    
    this.pagesService.getPokemon(this.pokemon).subscribe((resp:any)=>{
      //console.log(name);
      //console.log(species.url);
     // console.log(resp);
    })

    
    
  }

  pokemonImg (){



    
  }

  


  



}
