import { Component, OnInit ,Input} from '@angular/core';
import {HeroesService,Heroe} from '../../servicios/heroes.services';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroesresult',
  templateUrl: './heroesresult.component.html'
})
export class HeroesresultComponent implements OnInit {

heroes: Heroe[] = [];
termino: String;
@Input()  heroe:any={};

  constructor(private _activateRoute: ActivatedRoute, private _heroesService: HeroesService,
  private router: Router) {

   }

  ngOnInit() {

    this._activateRoute.params.subscribe(params=> {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
    });
  }

  verHeroe(heroe:Heroe){
    this.router.navigate(['/heroe',heroe.id]);
  }
}
