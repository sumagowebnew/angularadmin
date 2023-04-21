import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { InquiryService } from './free-consultation/inquiry.service';

import { BirthdayFormComponent } from './birthday-form/birthday-form.component';
import { EventAddComponent } from './event-add/event-add.component';

import { BirthdayComponent } from './birthday/birthday.component';
import { AddAppreciationComponent } from './add-appreciation/add-appreciation.component';
import { AddAwardsComponent } from './add-awards/add-awards.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { TrainingDetComponent } from './training-det/training-det.component';
import { AwardDetComponent } from './award-det/award-det.component';
import { AppreciationDetComponent } from './appreciation-det/appreciation-det.component';
import { QuoteComponent } from './quote/quote.component';
import { QuestionsComponent } from './questions/questions.component';


import { AddAchievementsComponent } from './add-achievements/add-achievements.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ViewAchievementsComponent } from './view-achievements/view-achievements.component';
import { ViewNewsComponent } from './view-news/view-news.component';



@NgModule({
  declarations: [
    AddAppreciationComponent,
    AddAwardsComponent,
    AddTrainingComponent,
    TrainingDetComponent,
    AwardDetComponent,
    AppreciationDetComponent,
    QuoteComponent,
    QuestionsComponent,

    AddAchievementsComponent,
    AddNewsComponent,
    ViewAchievementsComponent,
    ViewNewsComponent,

   
      

  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],

  providers: [InquiryService],
})
export class MainModule { }
