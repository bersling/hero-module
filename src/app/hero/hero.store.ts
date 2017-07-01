import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Hero } from './hero';

import { ResourceStoreService } from '@tsmean/resource';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class HeroStoreService {

  constructor(
      private resourceStore: ResourceStoreService
  ) { }

  private get resourceName() {
    return 'heroes';
  }

  addOrUpdate (hero: Hero): void {
    this.resourceStore.addOrUpdate(this.resourceName, hero);
  }

  addOrUpdateMany(heroes: Hero[]): void {
    this.resourceStore.addOrUpdateMany(this.resourceName, heroes);
  }

  remove (resourceId: string): void {
    this.resourceStore.remove(this.resourceName, resourceId);
  }

  get (resourceId: string): BehaviorSubject<Hero> {
    return this.resourceStore.get(this.resourceName, resourceId);
  }

}
