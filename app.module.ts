import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { FaqComponent } from './faq/faq.component';
import { FitnessnutritionComponent } from './service/FN/fitnessnutrition/fitnessnutrition.component';
import { FitnessmedicineComponent } from './service/FN/fitnessmedicine/fitnessmedicine.component';
import { NumerologyComponent } from './service/EHE/numerology/numerology.component';
import { ReikiComponent } from './service/EHE/reiki/reiki.component';
import { RapidtrasnformationaltherapyComponent } from './service/P/rapidtrasnformationaltherapy/rapidtrasnformationaltherapy.component';
import { EmotionallyimaginativetherapyComponent } from './service/P/emotionallyimaginativetherapy/emotionallyimaginativetherapy.component';
import { HypnotherapyComponent } from './service/P/hypnotherapy/hypnotherapy.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DsComponent } from './service/ds/ds.component';
import { ImportanttopicsComponent } from './service/importanttopics/importanttopics.component';
import { VideosComponent } from './videos/videos.component';
import { FilterbyidPipe } from './videos/filterbyid.pipe';
import { YoutubepopupComponent } from './youtubepopup/youtubepopup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    ServiceComponent,
    FaqComponent,
    FitnessnutritionComponent,
    FitnessmedicineComponent,
    NumerologyComponent,
    ReikiComponent,
    RapidtrasnformationaltherapyComponent,
    EmotionallyimaginativetherapyComponent,
    HypnotherapyComponent,
    LoaderComponent,
    DsComponent,
    ImportanttopicsComponent,
    VideosComponent,
    FilterbyidPipe,
    YoutubepopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
