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
    }
  }
  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() {
    if (this.paramsSub) { this.paramsSub.unsubscribe(); }
  }

}
