import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {from, interval, Subscription, zip} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Pokemon} from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-draw',
  templateUrl: './pokemon-draw.component.html',
  styleUrls: ['./pokemon-draw.component.css']
})
export class PokemonDrawComponent implements OnInit {

  chosenPokemon = new Pokemon();
  choiceSub: Subscription;

  constructor(private dataService: DataService) {
  }

  // On init combine two observables to show one new pokemon each 100 ms
  ngOnInit() {
    this.choiceSub = zip(
      interval(100),
      this.dataService.getPokemons().pipe(switchMap(serverPokemons => from(serverPokemons)))
    ).pipe(
      map(([, pokemon]) => pokemon),
    ).subscribe(pokemon => this.chosenPokemon = pokemon);
  }

  stop() {
    this.choiceSub.unsubscribe();
  }
}
