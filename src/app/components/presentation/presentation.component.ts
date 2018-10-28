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
        this.url = 'http://bit.ly/display-what';
        break;
      case 'fantastic-forms':
        this.title = 'Fabricating Fantastic Forms';
        this.url = 'http://bit.ly/fantastic-forms';
        break;
      case 'psych-of-design':
        this.title = 'Not Just My Opinion';
        this.url = 'http://bit.ly/psych-of-design';
        break;
      case 'care-feeding':
        this.title = 'Care And Feeding of your Developers';
        this.url = 'http://bit.ly/care-feeding';
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