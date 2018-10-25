import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  skills;
  skillsList = [
      { name: 'User Experience', value: 4},
      { name: 'Usability', value: 4},
      { name: 'Accessibility', value: 4},
      { name: 'WAI-ARIA', value: 4},
      { name: 'WCAG', value: 5},
      { name: 'Section 508', value: 4},
      { name: 'Git', value: 4},
      { name: 'AngularJS', value: 5},
      { name: 'Angular', value: 5},
      { name: 'React', value: 3},
      { name: 'HTML5', value: 5},
      { name: 'CSS', value: 5},
      { name: 'LESS & SASS', value: 5},
      { name: 'Bootstrap', value: 4},
      { name: 'Material Design', value: 5},
      { name: 'JavaScript', value: 4},
      { name: 'Typescript', value: 4},
      { name: 'XSLT/XPath', value: 4},
      { name: 'Regex', value: 4},
      { name: 'Ruby', value: 2},
      { name: 'Markdown', value: 4},
      { name: 'NPM', value: 3},
      { name: 'Velocity Templates', value: 3},
      { name: 'dotCMS', value: 3},
      { name: 'WordPress', value: 3},
      { name: 'Joomla', value: 3},
      { name: 'Firebase', value: 4},
      { name: 'Illustrator', value: 5},
      { name: 'InDesign', value: 4},
      { name: 'Photoshop', value: 3},
      { name: 'Illustration', value: 4},
      { name: 'Photography', value: 5},
      { name: 'Research', value: 4},
      { name: 'Statistics', value: 3},
      { name: 'SPSS', value: 3},
      { name: 'Linux', value: 3},
      { name: 'OS X', value: 4},
      { name: 'VS Code', value: 4},
      { name: 'Design', value: 5},
  ];

  ngOnInit() {
    this.skills = _.cloneDeep(this.skillsList);
  }

  getNum(val) {
    return new Array(val);
  }

  filter(val) {
    console.log(val);
    const superset = _.cloneDeep(this.skillsList);
    if (val) {
      const cleanVal = val.toLowerCase().trim();
      this.skills = _.filter(superset, skill => this.arrayContainsArray(skill.name.toLowerCase().split(''), cleanVal.split('')));
    } else {
      this.skills = superset;
    }
  }

  arrayContainsArray (superset, subset) {
    if (0 === subset.length) {
      return false;
    }
    return subset.every(function (value) {
      return (superset.indexOf(value) >= 0);
    });
  }

}
