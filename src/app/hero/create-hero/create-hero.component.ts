import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {NotifyService} from 'notify-angular';
import {HeroDashboardListStore} from '../hero-dashboard-list.store';

@Component({
  selector: 'hero-create',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  public newHero: Hero;

  constructor(
      private heroService: HeroService,
      private notifyService: NotifyService,
      private dashboardList: HeroDashboardListStore
  ) { }

  ngOnInit() {
    this.newHero = {};
  }

  public createHero() {
    const heroObs = this.heroService.createHero(this.newHero);
    heroObs.subscribe(resp => {
      this.notifyService.success('Hero Created');
      this.dashboardList.add(resp.uid);
    }, errorResp => {
      this.notifyService.error(errorResp.statusText);
    });
  }

}
