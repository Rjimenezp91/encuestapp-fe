import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { HomeComponent } from './components/shared/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'survey' , component: SurveyComponent},
  {path: 'results' , component: ResultsComponent},
  {path: '**' , redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
