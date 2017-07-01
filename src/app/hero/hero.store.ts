import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Hero } from './hero';

import { ResourceStoreService } from '@tsmean/resource';

@Injectable()
export class HeroStoreService {

  constructor(
      private resourceStore: ResourceStoreService
  ) { }

  private get resourceName() {
    return 'heroes';
  }

  addOrUpdate (resourceId: string, hero: Hero): void {
    this.resourceStore.addOrUpdate(this.resourceName, hero);
  }

  remove (resourceId: string): void {
    this.resourceStore.remove(this.resourceName, resourceId);
  }

  get (resourceId: string): Hero {
    return this.resourceStore.get(this.resourceName, resourceId);
  }

}
