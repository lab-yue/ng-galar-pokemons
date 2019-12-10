import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonComponent } from './pokemon/pokemon.component';
import { TitleComponent } from './title/title.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonComponent, TitleComponent, PokemonSearchComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
