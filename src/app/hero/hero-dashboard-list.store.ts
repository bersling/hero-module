import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Hero } from './hero';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class HeroDashboardListStore {

  private dashboardList = new BehaviorSubject([]);

  constructor() { }

  /**
   * Adds a resourceId to the list. If no position is provided, appends it to the end.
   */
  add (resourceId: string, index?: number): void {
    const currentValue = this.dashboardList.getValue(); // todo: check immutability
    if (index) {
      if (index <= currentValue.length) {
        currentValue.splice(index, 0, resourceId);
        this.dashboardList.next(currentValue);
      } else {
        throw new Error('Index of bounds. Cannot add hero.');
      }
    } else {
      currentValue.push(resourceId);
      this.dashboardList.next(currentValue);
    }
  }

  remove (resourceId: string): void {
    const currentValue = this.dashboardList.getValue();
    this.dashboardList.next(currentValue.filter(id => id !== resourceId));
  }

  get(): Observable<string[]> {
    return this.dashboardList;
  }

  update (index: number, newResourceId: string): void {
    const currentValue = this.dashboardList.getValue();
    if (index <= currentValue.length) {
      currentValue[index] = newResourceId;
      this.dashboardList.next(currentValue);
    } else {
      throw new Error('Index of bounds. Cannot update hero.');
    }
  }

}
