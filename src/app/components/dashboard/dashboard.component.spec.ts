import { Hero } from './../../interfaces/hero';
import { HeroService } from './../../services/hero.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroServiceStub: Partial<HeroService> = {
    getHeroes: () => {
      const heroes: Hero[] = [
        {
          id: 0,
          name: 'Batman',
        },
        {
          id: 1,
          name: 'Flash',
        },
      ];
      return of(heroes);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: HeroService, useValue: heroServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
