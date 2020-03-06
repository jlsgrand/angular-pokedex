import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Pokemon} from '../model/pokemon.model';
import {DataService} from '../data.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-trainer-pokemon-list',
  templateUrl: './trainer-pokemon-list.component.html',
  styleUrls: ['./trainer-pokemon-list.component.css']
})
export class TrainerPokemonListComponent implements OnInit {

  pokemons$: Observable<Pokemon[]>;

  constructor(private dataService: DataService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.pokemons$ = this.dataService.getTrainerPokemonList(this.loginService.getLoggedInTrainerId());
  }

}
