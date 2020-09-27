import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {

  presentationId: String;
  paramsSub: Subscription;
  url: SafeUrl;
  title: String;
  video: string;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(params => {
      this.presentationId = params.id;
      this.setUrl(params.id);
    });
  }

  setUrl(id) {
    switch (id) {
      case 'display-what':
        this.title = '.CSS { display: what? }';
        this.url = 'https://bit.ly/display-what';
        break;
      case 'fantastic-forms':
        this.title = 'Fabricating Fantastic Forms';
        this.url = 'https://bit.ly/fantastic-forms';
        break;
      case 'psych-of-design':
        this.title = 'Not Just My Opinion';
        this.url = 'https://bit.ly/psych-of-design';
        break;
      case 'care-feeding':
        this.title = 'Care And Feeding of your Developers';
        this.url = 'https://bit.ly/care-feeding';
        break;
      case 'accessibility-cookbook':
        this.title = 'Accessibility Cookbook: 10 Easy Recipes';
        this.url = 'https://bit.ly/2VaOROe';
        break;
      case 'mastering-shadow-dom':
        this.title = 'Mastering Shadow Dom';
        this.url = 'https://bit.ly/2WM6fJ6';
        this.video = 'https://www.youtube.com/embed/gSqxp2cjSYQ';
        break;
      case 'accessibility-basics-workshop':
        this.title = 'Accessibility Basics';
        this.url = 'https://bit.ly/32wacWt';
        break;
      case 'tables-have-their-place':
        this.title = 'Tables Have Their Place: Now let\’s make them fit';
        this.url = 'https://bit.ly/2O3fw0q';
        break;
      case 'predictable-spell-casting':
        this.title = 'Predictable Spell Casting: Guiding your users with CSS animations';
        this.url = 'https://martine-dowden.github.io/Guiding-your-users-with-CSS-animations/#/';
        break;
      case 'can-you-read-me-now':
        this.title = 'Can You Read Me Now';
        this.url = 'https://bit.ly/2OYTFG3';
        break;
      case 'typesetting-in-css':
        this.title = 'Typesetting in CSS: Using Typography to Enhance Your Design';
        this.url = 'https://docs.google.com/presentation/d/e/2PACX-1vSDNcX1OvVlBX8BAdK6eUDSgOuOnoln5G0-o3a3gHvxfI4PuKe-IZJ3cRlknhfgTHLWPVJjdgN1RSxi/embed';
        this.video = 'https://www.youtube.com/embed/Rrl_QxPX248';
        break;
      case 'kiss-my-sass':
        this.title = 'KISS my Sass';
        this.url = 'https://docs.google.com/presentation/d/e/2PACX-1vS970KaaICUx-3WqUdx7AeQvpvvCvCHA_VJ_iJvxs9Ec95hSES6ChnVkAQlYK6t0MyIyx9AT9cj_hjS/embed';
        this.video = 'https://www.youtube.com/embed/cDpkzfiLY0M';
        break;
      case 'sprinkle-vast-greatness':
        this.title = 'Sprinke Vast Greatness';
        this.url = 'https://docs.google.com/presentation/d/e/2PACX-1vRKS9vUJe_xLMTdiPT6DTPn1DiIUqCrcMclHqJdfTOj6yM5gUr4JhRLMP36r4Tkh-Rjcx3QLTTjkgbF/embed'
        break;
      case 'architecting-for-accessibility':
        this.title = 'Architecting For Accessibility';
        this.url = 'https://docs.google.com/presentation/d/e/2PACX-1vQexSQvjH7rIh86hDs3swz90unfor679b6RTaWJB0V8RM3jWkYunM-39E1iHR_z5N8rktaesqdsOxJ9/embed'
        this.video = 'https://www.youtube.com/embed/kxLGQkwMOsA';
    }
  }
  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() {
    if (this.paramsSub) { this.paramsSub.unsubscribe(); }
  }

}
