import {trigger, animate, style, group, query, transition} from '@angular/animations';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' })
    , { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
    ], { optional: true }),
  ])
];

const right = [
  group([
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
    , { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ], { optional: true }),
  ])
];

export const routerTransition = trigger('routerTransition', [

  transition('about => *', right),

  transition('projects => about', left),
  transition('projects => graphics', right),
  transition('projects => case-study', right),
  transition('projects => publications', right),
  transition('projects => speaking', right),

  transition('graphics => about', left),
  transition('graphics => projects', left),
  transition('graphics => case-study', right),
  transition('graphics => publications', right),
  transition('graphics => speaking', right),

  transition('case-study => about', left),
  transition('case-study => projects', left),
  transition('case-study => graphics', left),
  transition('case-study => publications', right),
  transition('case-study => speaking', right),

  transition('publications => about', left),
  transition('publications => projects', left),
  transition('publications => graphics', left),
  transition('publications => case-study', left),
  transition('publications => speaking', right),

  transition('speaking => *', left),

]);

