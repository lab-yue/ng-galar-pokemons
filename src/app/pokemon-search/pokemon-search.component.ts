import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pokemon-search",
  templateUrl: "./pokemon-search.component.html",
  styleUrls: ["./pokemon-search.component.scss"]
})
export class PokemonSearchComponent implements OnInit {
  constructor() {}

  value = "";
  onKey(value: string) {
    this.value = value;
    console.log(value);
  }

  ngOnInit() {}
}
