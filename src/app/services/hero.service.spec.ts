import { TestBed } from '@angular/core/testing';
import { Hero } from '../interfaces/hero';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getHeroes should return Observable of array of Heroes', () => {
    let heroes: Hero[] = [];
    service.getHeroes().subscribe((response) => {
      heroes = response;
    });
    expect(heroes).not.toHaveSize(0);
  });

  it('getHero should return Observable of Hero', () => {
    let hero: Hero | undefined = undefined;
    service.getHero(11).subscribe((response) => {
      hero = response;
    });
    expect(hero).toBeTruthy();
  });
});
