import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  template: '<a href="https://martine.dev/publications/{{ presentationId }}">Click here to navigate to {{ info[presentationId] }} page</a>',
})
export class PresentationComponent implements OnInit, OnDestroy {

  presentationId: string;
  destroyed$: Subject<boolean> = new Subject();
  info = {
    'display-what': '.CSS { display: what? }',
    'fantastic-forms': 'Fabricating Fantastic Forms',
    'psych-of-design': 'Not Just My Opinion',
    'care-feeding': 'Care And Feeding of your Developers',
    'accessibility-cookbook': 'Accessibility Cookbook: 10 Easy Recipes',
    'mastering-shadow-dom': 'Mastering Shadow Dom',
    'accessibility-basics-workshop': 'Accessibility Basics',
    'tables-have-their-place': 'Tables Have Their Place: Now let\’s make them fit',
    'predictable-spell-casting': 'Predictable Spell Casting: Guiding your users with CSS animations',
    'can-you-read-me-now': 'Can You Read Me Now',
    'typesetting-in-css': 'Typesetting in CSS: Using Typography to Enhance Your Design',
    'kiss-my-sass': 'KISS my Sass',
    'sprinkle-vast-greatness': 'Sprinkle Vast Greatness',
    'architecting-for-accessibility': 'Architecting For Accessibility'
  };

  constructor( private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroyed$)).subscribe(params => this.presentationId = params.presentationId);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
