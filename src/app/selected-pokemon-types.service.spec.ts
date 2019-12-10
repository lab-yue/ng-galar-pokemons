import { TestBed } from '@angular/core/testing';

import { SelectedPokemonTypesService } from './selected-pokemon-types.service';

describe('SelectedPokemonTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedPokemonTypesService = TestBed.get(SelectedPokemonTypesService);
    expect(service).toBeTruthy();
  });
});
