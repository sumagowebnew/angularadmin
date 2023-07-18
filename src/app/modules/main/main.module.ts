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
import { DemoComponent } from './demo/demo.component';
import { UpdatePortfolioFormComponent } from './update-portfolio-form/update-portfolio-form.component';
import { DevelopmentFormComponent } from './development-form/development-form.component';
import { AddAdminTeamComponent } from './add-admin-team/add-admin-team.component';
import { AddTraineeDetailsComponent } from './add-trainee-details/add-trainee-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactDetailsListComponent } from './contact-details-list/contact-details-list.component';
import { AddContactDetailsComponent } from './add-contact-details/add-contact-details.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ValueFromObjectPipe } from 'src/app/pipes/value-from-object-pipe.pipe';
import { AddVancancyComponent } from './add-vancancy/add-vancancy.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';


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
    TraineeTdetailsComponent,
    DemoComponent,
    UpdatePortfolioFormComponent,
    DevelopmentFormComponent,
    AddAdminTeamComponent,
    AddTraineeDetailsComponent,
    ContactDetailsComponent,
    ContactDetailsListComponent,
    AddContactDetailsComponent,
    ValueFromObjectPipe,
    AddVancancyComponent,
    VacancyDetailsComponent

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
    MatOptionModule,
    MatTableModule,
    MatInputModule,
    MatSortModule
  ],

  providers: [InquiryService],
})
export class MainModule { }
