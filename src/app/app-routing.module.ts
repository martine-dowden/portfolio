import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SamplesComponent } from './components/samples/samples.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: SamplesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'case-study', component: CaseStudyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
