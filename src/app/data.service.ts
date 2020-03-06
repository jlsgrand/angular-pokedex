import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from './model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>('http://localhost:8080/api/pokemons');
  }

  getPokemonsByNumero(numero: number) {
    return this.httpClient.get<Pokemon>('http://localhost:8080/api/pokemons/' + numero);
  }

  getPokemonTypes(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:8080/api/pokemon-types/');
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.httpClient.put<Pokemon>('http://localhost:8080/api/pokemons/', pokemon);
  }

  getTrainerPokemonList(trainerId: number): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>('http://localhost:8080/api/trainers/' + trainerId);
  }
}
