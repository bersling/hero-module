import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {HeroDashboardListStore} from '../hero-dashboard-list.store';
import {HeroStoreService} from '../hero.store';

@Component({
  selector: 'hero-wrapper',
  templateUrl: './hero-wrapper.component.html',
  styleUrls: ['./hero-wrapper.component.css']
})
export class HeroWrapperComponent implements OnInit {

  heroIds: string[] = [];

  constructor(
      private heroService: HeroService,
      private dashboardList: HeroDashboardListStore,
      private heroStore: HeroStoreService
  ) {}


  ngOnInit() {

    // get heroes and initialize dashboard list
    this.heroService.getHeros().subscribe(heroes => {
      this.heroStore.addOrUpdateMany(heroes);
      this.dashboardList.set(heroes.map(hero => hero.uid));
    }, errorResp => {
      console.error('something went wrong when getting heroes:', errorResp);
    });

    // set up listener
    this.dashboardList.get().subscribe(newList => {
      this.heroIds = newList;
    });

  }


}
