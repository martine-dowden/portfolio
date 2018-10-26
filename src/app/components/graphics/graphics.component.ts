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
      name: 'Mobilify Icon',
      url: 'assets/img/branding/mobilify-icon.png'
    },
    {
      name: 'Tekyn Logo',
      url: 'assets/img/branding/tekyn.png'
    },
    {
      name: 'Librum Arcanum Logo',
      url: 'assets/img/librum-logo.svg'
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
      name: 'Parking Lot',
      url: 'assets/img/lot2.svg'
    },
    {
      name: 'Lexi',
      url: 'assets/img/flexepark_car.svg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
