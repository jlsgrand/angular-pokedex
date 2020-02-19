import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {PokemonDrawComponent} from './pokemon-draw/pokemon-draw.component';


const routes: Routes = [
  {path: '', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDetailsComponent},
  {path: 'draw', component: PokemonDrawComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
