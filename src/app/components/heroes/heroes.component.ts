import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(private _heroesService:HeroesService,
              private router:Router) {
    console.log("Constructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

//programacion implementada para uso de link se debe importar Router y definirlo en el constructor
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
  }

}
