import { TestBed, inject } from '@angular/core/testing';

import {HttpModule, ResponseOptions, XHRBackend, Response} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {HeroDashboardListStore} from './hero-dashboard-list.store';

describe('Hero Dashboard List Store Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroDashboardListStore
      ]
    });
  });

  it('should be able to create the service',
    inject([HeroDashboardListStore],
      (dashboardListStore: HeroDashboardListStore) => {
        expect(dashboardListStore).toBeTruthy();
      })
  );

  it('should be able to add an item',
    inject([HeroDashboardListStore],
      (dashboardListStore: HeroDashboardListStore) => {
        dashboardListStore.add('hello');
        dashboardListStore.get().subscribe(newList => {
          expect(newList[0]).toEqual('hello');
        });
      })
  );

});
