import { Component } from "@angular/core";
import { SelectedPokemonTypesService } from "./selected-pokemon-types.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [SelectedPokemonTypesService]
})
export class AppComponent {
  title = "ng-tour";
}
