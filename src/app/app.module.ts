import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AboutComponent } from './components/about/about.component';
import { SamplesComponent } from './components/samples/samples.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { FooterComponent } from './components/footer/footer.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { SpeakingComponent } from './components/speaking/speaking.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SamplesComponent,
    PublicationsComponent,
    FooterComponent,
    CaseStudyComponent,
    GraphicsComponent,
    SpeakingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
