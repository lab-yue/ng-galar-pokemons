import { Component, OnInit, Input } from "@angular/core";
import pokemonTypes from "../../assets/pokemonTypes.json";
@Component({
  selector: "app-pokemon-type-tag",
  templateUrl: "./pokemon-type-tag.component.html",
  styleUrls: ["./pokemon-type-tag.component.scss"]
})
export class PokemonTypeTagComponent implements OnInit {
  constructor() {}
  typeTagClass = {};
  @Input() pokemonType: string;

  ngOnInit() {
    this.typeTagClass = {
      [pokemonTypes[this.pokemonType]]: true
    };
  }
}
