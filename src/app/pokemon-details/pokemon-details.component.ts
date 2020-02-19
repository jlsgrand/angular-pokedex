import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  types$: Observable<string[]>;
  editedPokemon: Pokemon = new Pokemon();
  selectedNewType: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.dataService.getPokemonsByNumero(+params.get('id')).subscribe(serverPokemon => this.editedPokemon = serverPokemon));
    this.types$ = this.dataService.getPokemonTypes();
  }

  addType() {
    if (this.editedPokemon.types.indexOf(this.selectedNewType) < 0) {
      this.editedPokemon.types.push(this.selectedNewType);
    }
  }

  deleteType(type: string) {
    this.editedPokemon.types.splice(
      this.editedPokemon.types.indexOf(type),
      1);
  }

  onSavePokemon() {
    this.dataService.updatePokemon(this.editedPokemon)
      .subscribe(savedPokemon => console.log(savedPokemon));
  }
}
