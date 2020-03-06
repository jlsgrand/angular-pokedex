import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';
import {PokemonDrawComponent} from './pokemon-draw/pokemon-draw.component';
import {TrainerPokemonListComponent} from './trainer-pokemon-list/trainer-pokemon-list.component';
import {LoginGuard} from './login.guard';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDetailsComponent},
  {path: 'draw', component: PokemonDrawComponent},
  {path: 'trainer', component: TrainerPokemonListComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule {
}
