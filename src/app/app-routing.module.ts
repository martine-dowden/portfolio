import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SamplesComponent } from './components/samples/samples.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { SpeakingComponent } from './components/speaking/speaking.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home'} },
  { path: 'about', component: AboutComponent, data: { state: 'about'} },
  { path: 'projects', component: SamplesComponent, data: { state: 'projects'} },
  { path: 'graphics', component: GraphicsComponent, data: { state: 'graphics'} },
  { path: 'case-study', component: CaseStudyComponent, data: { state: 'case-study'} },
  { path: 'publications', component: PublicationsComponent, data: { state: 'publications'} },
  { path: 'speaking', component: SpeakingComponent, data: { state: 'speaking'} },
  { path: 'presentation/:id', component: PresentationComponent, data: { state: 'presentation'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
