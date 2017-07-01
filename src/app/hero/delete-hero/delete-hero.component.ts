import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {HeroDashboardListStore} from '../hero-dashboard-list.store';
import {HeroStoreService} from '../hero.store';

@Component({
  selector: 'hero-delete',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.css']
})
export class DeleteHeroComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private dashboardList: HeroDashboardListStore,
    private heroStore: HeroStoreService
  ) { }

  ngOnInit() {
  }

  public deleteHero() {
    this.heroService.deleteHero(this.hero.uid).subscribe(() => {
      this.heroStore.remove(this.hero.uid);
      this.dashboardList.removeById(this.hero.uid);
    });
  }

}
