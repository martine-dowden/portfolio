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
    }
  ];

  publications = [];
  publicationList = [
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
    } else {
      this.publications = _.filter(_.cloneDeep(this.publicationList), (pub) => pub.type === chip.value );
    }
  }

  constructor() { }

  ngOnInit() {
    this.publications = _.cloneDeep(this.publicationList);
  }

}
