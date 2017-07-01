import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hero} from '../hero';
import {HeroSettings} from '../hero-settings';
import {HeroService} from '../hero.service';

import { CoreUtils } from '@tsmean/utils';

@Component({
  selector: 'hero-display',
  templateUrl: './display-hero.component.html',
  styleUrls: ['./display-hero.component.css']
})
export class DisplayHeroComponent implements OnChanges, OnInit {


  @Input()
  hero: Hero = {};

  heroCopy: Hero;

  heroSettings: HeroSettings = {
    isBeingEdited: false
  };

  constructor(
      private heroService: HeroService
  ) { }

  ngOnInit() {
    this.resetCopy();
  }

  ngOnChanges(changes: SimpleChanges) {
      this.resetCopy();
  }


  toggleEditable() {
    this.heroSettings.isBeingEdited = !this.heroSettings.isBeingEdited;
  }

  updateHero() {
    this.heroService.updateHero(this.heroCopy).subscribe(hero => {
      this.hero = hero;
      this.toggleEditable();
    });
  }

  resetCopy() {
    this.heroCopy = CoreUtils.deepCopy(this.hero);
  }

}
