# Pokedex en Angular

Ce projet a pour but de résumer quelques notions de base en Angular.

## Déclaration de composants

Plusieurs composants sont déclarés dans l'application :

- [La liste des pokemons](./src/app/pokemon-list) qui est la page de base avec la liste des 151 premiers Pokemons.
- [Les détails d'un pokemon](./src/app/pokemon-details) pour afficher les détails d'un pokemon.
- [Le presque tirage au sort d'un pokemon](./src/app/pokemon-draw) qui est juste la pour montrer qu'on peut combiner des observables.
- [Le composant de login](./src/app/login) pour pouvoir se connecter en tant que dresseur.
- [Le composant trainer](./src/app/trainer-pokemon-list) pour visualiser ses propres pokemons en tant que dresseur.

## Communication en HTTP avec une API REST

Deux services sont disponibles afin de pouvoir :

- Récupérer la liste de tous les pokemons, des types de pokemons, sauvegarder un pokemons, ... --> [Le data service](./src/app/data.service.ts)
- Se connecter en tant que dresseur --> [Le login service](./src/app/login.service.ts)

## Routing

### Déclaration des routes

On déclare les différentes routes de notre application dans le fichier [app-routing.module.ts](./src/app/app-routing.module.ts). Certaines routes ne sont accessibles que sous certaines conditions avec les Guards.

### Guards

On définit des règles pour activer certaines routes avec par exemple le [login guard](./src/app/login.guard.ts) qui vérifie qu'un token est présent dans le session storage pour activer la route.

N.B. dans ce cas, c'est vraiment cosmétique et pas **très sécurisé** vu qu'il suffirait d'ajouter un token bidon dans le session storage pour contourner ce Guard.

## Utilisation du Session Storage

Afin de stocker des données côté client, on utilise le session storage. Ici c'est pour stocker le token fourni par l'API pour visualiser les pokemons du dresseur connecté.
