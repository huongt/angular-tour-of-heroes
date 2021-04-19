import { HeroService } from './../hero.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { Hero } from '../hero';

import { HeroDetailComponent } from './hero-detail.component';

fdescribe('HeroDetailComponent', () => {
  let heroService: HeroService;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        HeroService,
      ]
    });
    injector = getTestBed();
    heroService = injector.get(HeroService);
  });

  fdescribe('hero detail spec test', () => {
    fit('shoule be equal', () => {
      const hero: Hero = {
        id: 1,
        name: 'john'
      };
      const hero1: Hero = {
        id: 1,
        name: 'dian'
      }
      const id = 1;
      heroService.getHeroTest(id)
        .subscribe(
          (res) => {
            console.log(`hehe ${res}`);
            expect(res).toEqual(hero);
          }
        );
    });
  });
});
