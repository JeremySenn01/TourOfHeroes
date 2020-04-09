import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private heroService: HeroService) {
  }

  getHero(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHeroById(id).subscribe(h => this.hero = h);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  ngOnInit(): void {
    this.getHero();
  }


}
