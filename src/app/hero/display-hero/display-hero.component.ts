import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hero} from '../hero';
import {HeroSettings} from '../hero-settings';
import {HeroService} from '../hero.service';

import { CoreUtils } from '@tsmean/utils';
import {HeroStoreService} from '../hero.store';

@Component({
  selector: 'hero-display',
  templateUrl: './display-hero.component.html',
  styleUrls: ['./display-hero.component.css']
})
export class DisplayHeroComponent implements OnChanges {

  @Input()
  heroId: string;

  hero: Hero;

  heroCopy: Hero;

  heroSettings: HeroSettings = {
    isBeingEdited: false
  };

  constructor(
      private heroService: HeroService,
      private heroStore: HeroStoreService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['heroId']) {
      this.heroStore.get(this.heroId).subscribe(hero => {
        this.hero = hero;
        this.resetCopy();
      })
    }
  }


  toggleEditable() {
    this.heroSettings.isBeingEdited = !this.heroSettings.isBeingEdited;
  }

  updateHero() {
    this.heroService.updateHero(this.heroCopy).subscribe(hero => {
      this.heroStore.addOrUpdate(hero);
      this.toggleEditable();
    });
  }

  resetCopy() {
    if (this.hero) {
      this.heroCopy = CoreUtils.deepCopy(this.hero);
    }
  }

}
