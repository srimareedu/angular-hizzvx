import { Component, OnInit } from '@angular/core';
import { hero } from '../../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm'
  constructor() { }

  ngOnInit() {
  }

}