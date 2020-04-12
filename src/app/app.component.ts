import { Component } from '@angular/core';

@Component({
  selector: 'exp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  code = `export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private service: HeroService) { }

    ngOnInit() {
      this.heroes = this.service.getHeroes();
    }

    selectHero(hero: Hero) { this.selectedHero = hero; }
  }`;
}
