import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
  constructor() {}

  @Input() pokemon: any;

  ngOnInit() {}
}
