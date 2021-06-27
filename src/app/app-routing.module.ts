import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about.component';
import { SamplesComponent } from './components/samples.component';
import { PublicationsComponent } from './components/publications.component';
import { CaseStudyComponent } from './components/case-study.component';
import { GraphicsComponent } from './components/graphics.component';
import { SpeakingComponent } from './components/speaking.component';
import { HomeComponent } from './components/home.component';
import { PresentationComponent } from './components/presentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: SamplesComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: 'case-study', component: CaseStudyComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'speaking', component: SpeakingComponent },
  { path: 'presentation/:presentationId', component: PresentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
