import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

    graphics = [
    {
      name: 'Mobilify Logo',
      url: 'assets/img/branding/mobilify.png'
    },
    {
      name: 'Mayhem Game Calls Icon',
      url: 'assets/img/branding/mayhem-icon.svg'
    },
    {
      name: 'Tekyn Logo',
      url: 'assets/img/branding/tekyn.png'
    },
    {
      name: 'Andromeda Logo',
      url: 'assets/img/branding/andromeda-fat.svg'
    },
    {
      name: 'Flexepark Horizontal Logo',
      url: 'assets/img/horzontal-flexe.svg'
    },
    {
      name: 'Shifts On Demand Logo',
      url: 'assets/img/sod_logo.svg'
    },
    {
      name: 'tekyn Icon',
      url: 'assets/img/branding/t.png'
    },
    {
      name: 'Turn 2 Logo',
      url: 'assets/img/branding/turn2.svg'
    },
    {
      name: 'Street',
      url: 'assets/img/community2.svg'
    },
    {
      name: 'Mobilify Icon',
      url: 'assets/img/branding/mobilify-icon.png'
    },
    {
      name: 'Lexi',
      url: 'assets/img/flexepark_car.svg'
    },
    {
      name: 'Andromeda Icon',
      url: 'assets/img/branding/icon-fat-tilt.svg'
    },
    {
      name: 'cirrostyle',
      url: 'assets/img/cirrostyle_icon.svg'
    },
    {
      name: 'Librum Arcanum Logo',
      url: 'assets/img/librum-logo.svg'
    },
    {
      name: 'Mayhem Game Calls Logo',
      url: 'assets/img/branding/mayhem-logo.svg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
