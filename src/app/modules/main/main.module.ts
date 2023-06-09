import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { InquiryService } from './free-consultation/inquiry.service';
import { AddAppreciationComponent } from './add-appreciation/add-appreciation.component';
import { AddAwardsComponent } from './add-awards/add-awards.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { TrainingDetComponent } from './training-det/training-det.component';
import { AwardDetComponent } from './award-det/award-det.component';
import { AppreciationDetComponent } from './appreciation-det/appreciation-det.component';
import { QuoteComponent } from './quote/quote.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ViewAchievementsComponent } from './view-achievements/view-achievements.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { TraineeTdetailsComponent } from './team/trainee-tdetails/trainee-tdetails.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    AddNewsComponent,
    ViewAchievementsComponent,
    ViewNewsComponent,
    TraineeTdetailsComponent

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatListModule,
    MatOptionModule
  ],

  providers: [InquiryService],
})
export class MainModule { }
