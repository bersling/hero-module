import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'hero-wrapper',
  templateUrl: './hero-wrapper.component.html',
  styleUrls: ['./hero-wrapper.component.css']
})
export class HeroWrapperComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
      private heroService: HeroService
  ) {}


  ngOnInit() {

    // get heroes
    this.heroService.getHeros().subscribe(heroes => {
      this.heroes = heroes;
    }, errorResp => {
      console.error('something went wrong when getting heroes:', errorResp);
    });

  }


}
