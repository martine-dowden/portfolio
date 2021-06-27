import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AboutComponent } from './components/about.component';
import { SamplesComponent } from './components/samples.component';
import { PublicationsComponent } from './components/publications.component';
import { CaseStudyComponent } from './components/case-study.component';
import { GraphicsComponent } from './components/graphics.component';
import { SpeakingComponent } from './components/speaking.component';
import { HomeComponent } from './components/home.component';
import { PresentationComponent } from './components/presentation.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SamplesComponent,
    PublicationsComponent,
    CaseStudyComponent,
    GraphicsComponent,
    SpeakingComponent,
    HomeComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
