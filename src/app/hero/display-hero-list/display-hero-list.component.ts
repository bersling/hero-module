import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'hero-dashboard-list',
  templateUrl: './display-hero-list.component.html',
  styleUrls: ['./display-hero-list.component.css']
})
export class DisplayHeroListComponent implements OnInit {

  @Input()
  heroes: Hero[];

  constructor() { }

  ngOnInit() {

  }

}
