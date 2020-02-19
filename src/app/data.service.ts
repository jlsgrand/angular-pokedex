import {Injectable} from '@angular/core';
import {concat, forkJoin, merge, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from './model/pokemon.model';
import {concatMap, map, mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pokemons = [];

  constructor(private httpClient: HttpClient) {
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>('http://localhost:8080/api/pokemons');
  }

  getPokemonNumeros(): Observable<number[]> {
    return this.httpClient.get<Pokemon[]>('http://localhost:8080/api/pokemons')
      .pipe(
        tap(serverPokemons => this.pokemons = serverPokemons),
        map(serverPokemons => serverPokemons.map(serverPokemon => serverPokemon.numero)),
        tap(serverPokemonsModified => console.log(serverPokemonsModified))
      );
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
}
