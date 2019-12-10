import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SelectedPokemonTypesService {
  constructor() {}

  private pokemonTypesSource = new Subject<string[]>();

  pokemonTypes$ = this.pokemonTypesSource.asObservable();

  // Service message commands
  nextSelect(pokemonTypes: string[]) {
    this.pokemonTypesSource.next(pokemonTypes);
  }
}
