import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../interfaces/pokemon.interface';
import { PagesServiceService } from '../pages-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: []
})
export class MainPageComponent implements OnInit {
  
constructor() { }

ngOnInit(): void {
  
}
}
