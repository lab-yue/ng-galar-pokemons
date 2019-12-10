import { Component, OnInit } from "@angular/core";
import pokemonTypes from "../../assets/pokemonTypes.json";
import { SelectedPokemonTypesService } from "../selected-pokemon-types.service";

@Component({
  selector: "app-pokemon-search",
  templateUrl: "./pokemon-search.component.html",
  styleUrls: ["./pokemon-search.component.scss"]
})
export class PokemonSearchComponent implements OnInit {
  constructor(
    private selectedPokemonTypesService: SelectedPokemonTypesService
  ) {}

  pokemonTypes = Object.entries(pokemonTypes).map(([cn, en]) => ({
    cn,
    en
  }));
  value = [];

  isSelected(value: string) {
    return this.value.includes(value);
  }

  onClick(value: string) {
    if (this.isSelected(value)) {
      this.value = this.value.filter(v => v !== value);
      this.selectedPokemonTypesService.nextSelect(this.value);
      return;
    }
    if (this.value.length === 2) {
      this.value.shift();
    }
    this.value.push(value);
    this.selectedPokemonTypesService.nextSelect(this.value);
  }

  ngOnInit() {}
}
