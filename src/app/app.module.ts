import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonComponent } from './pokemon/pokemon.component';
import { TitleComponent } from './title/title.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonTypeTagComponent } from './pokemon-type-tag/pokemon-type-tag.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonComponent, TitleComponent, PokemonSearchComponent, PokemonTypeTagComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
