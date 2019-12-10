import { Component, OnInit } from "@angular/core";
import pokemons from "../../assets/pokemon.json";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  pokemons = pokemons;

  constructor() {}

  ngOnInit() {
    console.log(pokemons);
  }
}
