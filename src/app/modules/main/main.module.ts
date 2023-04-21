import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FreeConsultationComponent } from './free-consultation/free-consultation.component';
import { InquiryService } from './free-consultation/inquiry.service';
import { BirthdayComponent } from './birthday/birthday.component';
import { AddAppreciationComponent } from './add-appreciation/add-appreciation.component';
import { AddAwardsComponent } from './add-awards/add-awards.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { TrainingDetComponent } from './training-det/training-det.component';
import { AwardDetComponent } from './award-det/award-det.component';
import { AppreciationDetComponent } from './appreciation-det/appreciation-det.component';
import { QuoteComponent } from './quote/quote.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    FreeConsultationComponent,
    BirthdayComponent,
    AddAppreciationComponent,
    AddAwardsComponent,
    AddTrainingComponent,
    TrainingDetComponent,
    AwardDetComponent,
    AppreciationDetComponent,
    QuoteComponent,
    QuestionsComponent,
   
               

 
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [InquiryService],
})
export class MainModule { }
