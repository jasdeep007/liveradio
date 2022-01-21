import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { MainComponent } from './main/main.component';
import { DsComponent } from './service/ds/ds.component';
import { NumerologyComponent } from './service/EHE/numerology/numerology.component';
import { ReikiComponent } from './service/EHE/reiki/reiki.component';
import { FitnessmedicineComponent } from './service/FN/fitnessmedicine/fitnessmedicine.component';
import { FitnessnutritionComponent } from './service/FN/fitnessnutrition/fitnessnutrition.component';
import { ImportanttopicsComponent } from './service/importanttopics/importanttopics.component';
import { EmotionallyimaginativetherapyComponent } from './service/P/emotionallyimaginativetherapy/emotionallyimaginativetherapy.component';
import { HypnotherapyComponent } from './service/P/hypnotherapy/hypnotherapy.component';
import { RapidtrasnformationaltherapyComponent } from './service/P/rapidtrasnformationaltherapy/rapidtrasnformationaltherapy.component';
import { ServiceComponent } from './service/service.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },  
  { path: 'aboutus', component: ServiceComponent },
  { path: 'privacypolicy', component: ContactComponent },
  { path: 'liveradio', component: FaqComponent },
  { path: 'chat', component: DsComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
