import { Component, OnInit, OnDestroy } from "@angular/core";
import pokemons from "../../assets/pokemon.json";
import { SelectedPokemonTypesService } from "../selected-pokemon-types.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit, OnDestroy {
  filtered = pokemons;

  subscription: Subscription;

  constructor(
    private selectedPokemonTypesService: SelectedPokemonTypesService
  ) {}

  ngOnInit() {
    this.subscription = this.selectedPokemonTypesService.pokemonTypes$.subscribe(
      selected => {
        this.filtered = this.filter(selected);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(selected: string[]) {
    return pokemons.filter(pokemon => {
      if (!selected.length) {
        return true;
      }
      return selected.every(t => pokemon.types.includes(t));
    });
  }
}
