import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeTagComponent } from './pokemon-type-tag.component';

describe('PokemonTypeTagComponent', () => {
  let component: PokemonTypeTagComponent;
  let fixture: ComponentFixture<PokemonTypeTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTypeTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
