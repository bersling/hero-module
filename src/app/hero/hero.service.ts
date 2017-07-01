import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Hero } from './hero';

import { ResourceService } from '@tsmean/resource';

@Injectable()
export class HeroService {

  constructor(
      private resourceService: ResourceService
  ) { }

  private get resourceName (): string {
    return 'heroes';
  }

  getHeros(): Observable<Hero[]> {
    return this.resourceService.getResources(this.resourceName);
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.resourceService.createResource(hero, this.resourceName);
  }

  deleteHero(heroId: string): Observable<Hero> {
    return this.resourceService.deleteResource(heroId, this.resourceName);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.resourceService.updateResource(hero, this.resourceName);
  }

}
