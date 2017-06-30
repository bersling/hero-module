import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateHeroComponent} from './create-hero/create-hero.component';
import {DeleteHeroComponent} from './delete-hero/delete-hero.component';
import {DisplayHeroComponent} from './display-hero/display-hero.component';
import {DisplayHeroListComponent} from './display-hero-list/display-hero-list.component';
import {HeroService} from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    CreateHeroComponent,
    DeleteHeroComponent,
    DisplayHeroComponent,
    DisplayHeroListComponent
  ],
  declarations: []
})
export class HeroModule {

  static forRoot() {
    return {
      ngModule: HeroModule,
      providers: [ HeroService ]
    }
  }

}
