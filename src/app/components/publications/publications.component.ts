import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  chips = [
    {
      text: 'All',
      value: 'all',
      selected: true
    },
    {
      text: 'Articles',
      value: 'article',
      selected: false
    }, {
      text: 'Books',
      value: 'book',
      selected: false
    },
    {
      text: 'Presentations',
      value: 'presentation',
      selected: false
    },
    {
      text: 'Videos',
      value: 'hasVideo',
      selected: false
    }
  ];

  publications = [];
  publicationList = [
    {
      link: 'architecting-for-accessibility',
      linkText: 'Architecting For Accessibility',
      publisher: 'M2D2',
      year: '2020',
      type: 'presentation'
    },
    {
      link: 'sprinkle-vast-greatness',
      linkText: 'Sprinke Vast Greatness',
      publisher: 'M2D2',
      year: '2020',
      type: 'presentation'
    },
    {
      link: 'https://www.apress.com/us/book/9781484257494',
      linkText: 'Architecting CSS',
      publisher: 'Apress',
      year: '2020',
      type: 'book'
    },
    {
      link: 'kiss-my-sass',
      linkText: 'Kiss My Sass',
      publisher: 'M2D2',
      year: '2020',
      type: 'presentation',
      hasVideo: true
    },
    {
      link: 'typesetting-in-css',
      linkText: 'Typesetting in CSS',
      publisher: 'M2D2',
      year: '2020',
      type: 'presentation',
      hasVideo: true
    },
    {
      link: 'can-you-read-me-now',
      linkText: 'Can You Read Me Now',
      publisher: 'M2D2',
      year: '2019',
      type: 'presentation'
    },
    {
      link: 'predictable-spell-casting',
      linkText: 'Predictable Spell Casting',
      publisher: 'M2D2',
      year: '2019',
      type: 'presentation'
    },
    {
      link: 'tables-have-their-place',
      linkText: 'Tables Have Their Place',
      publisher: 'M2D2',
      year: '2019',
      type: 'presentation'
    },
    {
      link: 'accessibility-basics-workshop',
      linkText: 'Workshop: Accessibility Basics',
      publisher: 'M2D2',
      year: '2019',
      type: 'presentation'
    },
    {
      link: 'mastering-shadow-dom',
      linkText: 'Mastering Shadow Dom',
      publisher: 'M2D2',
      year: '2019',
      type: 'presentation',
      hasVideo: true
    },
    {
      link: 'https://www.apress.com/gp/book/9781484248805',
      linkText: 'Approachable Accessibility: Planning for Success',
      publisher: 'Apress',
      year: '2019',
      type: 'book'
    },
    {
      link: 'accessibility-cookbook',
      linkText: 'Accessibility Cookbook: 10 Easy Recipes',
      publisher: 'M2D2',
      year: '2019',
      type: 'presentation'
    },
    {
      link: 'https://www.pluralsight.com/guides/styling-when-encapsulated-in-angular',
      linkText: 'Styling Web Components',
      publisher: 'Pluralsight',
      year: '2018',
      type: 'article'
    },
    {
      link: 'https://www.pluralsight.com/guides/css-encapsulation-in-angular',
      linkText: 'CSS Encapsulation in Angular',
      publisher: 'Pluralsight',
      year: '2018',
      type: 'article'
    },
    {
      link: 'display-what',
      linkText: '.CSS { display: what? }',
      publisher: 'M2D2',
      year: '2018',
      type: 'presentation'
    },
    {
      link: 'https://www.oreilly.com/ideas/implement-oauth0-in-15-minutes-with-firebase',
      linkText: 'Implement OAuth in 15 minutes with Firebase',
      publisher: 'O\'Reilly',
      year: '2018',
      type: 'article'
    },
    {
      link: 'fantastic-forms',
      linkText: 'Fabricating Fantastic Forms',
      publisher: 'M2D2',
      year: '2018',
      type: 'presentation'
    },
    {
      link: 'care-feeding',
      linkText: 'Care And Feeding of your Developers',
      publisher: 'M2D2',
      year: '2017',
      type: 'presentation'
    },
    {
      link: 'psych-of-design',
      linkText: 'Not Just My Opinion',
      publisher: 'M2D2',
      year: '2017',
      type: 'presentation'
    },
    {
      link: 'https://inedo.com/abc',
      linkText: 'Programming Languages ABC++',
      publisher: 'Inedo',
      year: '2015',
      type: 'book'
    },
    {
      link: 'https://thebookpatch.com/BookStore/woodlands-the-coloring-book/f22fe985-6c40-4d69-b85c-f0e7a94a4783?isbn=9781620304853',
      linkText: 'Woodlands: The Coloring Book',
      publisher: 'Psychedelic Creations',
      year: '2013',
      type: 'book'
    }
  ];

  onSelect(chip) {
    this.chips.forEach(c => {
      c.selected = false;
    });
    chip.selected = true;
    if (chip.value === 'all') {
      this.publications = _.cloneDeep(this.publicationList);
    } else if (chip.value === 'hasVideo') {
      this.publications = _.filter(_.cloneDeep(this.publicationList), (pub) => pub.hasVideo );
    } else {
      this.publications = _.filter(_.cloneDeep(this.publicationList), (pub) => pub.type === chip.value );
    }
  }

  constructor() { }

  ngOnInit() {
    this.publications = _.cloneDeep(this.publicationList);
  }

}
