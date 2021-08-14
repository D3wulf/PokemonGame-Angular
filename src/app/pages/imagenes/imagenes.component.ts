import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PagesServiceService } from '../pages-service.service';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styles: []
})
export class ImagenesComponent implements OnInit {

 

  constructor(private pagesService:PagesServiceService,
    private http:HttpClient) { }

  ngOnInit(): void {

    

  }

  

  


  



}
