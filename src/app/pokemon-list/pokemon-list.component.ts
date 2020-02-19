import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Pokemon} from '../model/pokemon.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons$: Observable<Pokemon[]>;
  pokemonNumbers$: Observable<number[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.pokemons$ = this.dataService.getPokemons();
    this.pokemonNumbers$ = this.dataService.getPokemonNumeros();
  }

}
