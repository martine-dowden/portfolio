import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  projects = [
    {
      flipped: false,
      name: 'Flexepark',
      icon: 'assets/img/flexepark_car.svg',
      description: 'A friendly way to park',
      links: [
        { href: 'https://flexepark.com', text: 'App' }
      ]
    },
    {
      flipped: false,
      name: 'Librum Arcanum',
      icon: 'assets/img/librum_arcanum.svg',
      description: 'The Pathfinder Spellbook',
      links: [
        { href: 'https://www.librumarcanum.com/', text: 'Site' },
        { href: 'https://app.librumarcanum.com/', text: 'App' }
      ]
    },
    {
      flipped: false,
      name: 'cirrostyle',
      icon: 'assets/img/cirrostyle_icon.svg',
      description: 'Easily manage your vector images, converting them to custom-sized raster files on demand.',
      links: [
        { href: 'https://app.cirrostyle.com', text: 'App' },
      ]
    },
    {
      flipped: false,
      name: '.css {display: what?}',
      icon: 'assets/img/css.svg',
      description: 'Demo of the different values for the css display property',
      links: [
        { href: 'https://github.com/martine-dowden/display-what', text: 'Repo' },
        { href: 'https://martine-dowden.github.io/display-what/index.html', text: 'Site' }
      ]
    },
    {
      flipped: false,
      name: 'Playing With Fire',
      icon: 'assets/img/fireside.svg',
      description: 'Firebase Workshop',
      links: [
        { href: 'http://playingwithfire.live/', text: 'Site' },
        { href: 'https://github.com/Mx3-Studio', text: 'Repo' }
      ]
    },
    {
      flipped: false,
      name: 'Accessibility Cookbook: 10 Easy Recipes',
      icon: 'assets/img/cookbook.svg',
      description: 'Accessibility Demo Site',
      links: [
        { href: 'https://martine-dowden.github.io/accessibility-cookbook/#/home', text: 'Site' },
        { href: 'https://github.com/martine-dowden/accessibility-cookbook', text: 'Repo' },
        { routerLink: ['/presentation/accessibility-cookbook'], text: 'Slides'}
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
