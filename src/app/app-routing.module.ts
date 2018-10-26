import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SamplesComponent } from './components/samples/samples.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { SpeakingComponent } from './components/speaking/speaking.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: SamplesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'case-study', component: CaseStudyComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: 'speaking', component: SpeakingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
