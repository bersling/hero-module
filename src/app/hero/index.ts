import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateHeroComponent} from './create-hero/create-hero.component';
import {DeleteHeroComponent} from './delete-hero/delete-hero.component';
import {DisplayHeroComponent} from './display-hero/display-hero.component';
import {DisplayHeroListComponent} from './display-hero-list/display-hero-list.component';
import {HeroService} from './hero.service';
import {HeroWrapperComponent} from './hero-wrapper/hero-wrapper.component';
import {FormsModule} from '@angular/forms';

import {MdInputModule} from '@angular/material';
import {HeroDashboardListStore} from './hero-dashboard-list.store';
import {HeroStoreService} from './hero.store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule
  ],
  declarations: [
    CreateHeroComponent,
    DeleteHeroComponent,
    DisplayHeroComponent,
    DisplayHeroListComponent,
    HeroWrapperComponent
  ],
  exports: [
    CreateHeroComponent,
    DeleteHeroComponent,
    DisplayHeroListComponent,
    DisplayHeroComponent,
    HeroWrapperComponent
  ]
})
export class HeroModule {

  static forRoot() {
    return {
      ngModule: HeroModule,
      providers: [
        HeroDashboardListStore,
        HeroStoreService,
        HeroService
      ]
    }
  }

}
