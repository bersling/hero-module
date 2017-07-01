import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeroModule} from './hero/index';

import { createResourceModule } from '@tsmean/resource';

import {NotifyModule} from 'notify-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
const resourceModule = createResourceModule('http://demo.tsmean.com:4242/api/v1');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    resourceModule,
    NotifyModule.forRoot(),
    HeroModule.forRoot(),
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
