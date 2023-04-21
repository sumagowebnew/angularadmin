import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CountComponent } from './count/count.component';
import { FreeConsultationComponent } from './free-consultation/free-consultation.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { BirthdayFormComponent } from './birthday-form/birthday-form.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventAddComponent } from './event-add/event-add.component';
import { TeamComponent } from './team/team.component';

import { QuestionsComponent } from './questions/questions.component';
import { QuoteComponent } from './quote/quote.component';
import { AddAwardsComponent } from './add-awards/add-awards.component';
import { AddAppreciationComponent } from './add-appreciation/add-appreciation.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { AwardDetComponent } from './award-det/award-det.component';
import { AppreciationDetComponent } from './appreciation-det/appreciation-det.component';
import { TrainingDetComponent } from './training-det/training-det.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactEnquiryComponent } from './contact-enquiry/contact-enquiry.component';
import { CareerEnquiryComponent } from './career-enquiry/career-enquiry.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddAchievementsComponent } from './add-achievements/add-achievements.component';
import { ViewAchievementsComponent } from './view-achievements/view-achievements.component';
import { ViewNewsComponent } from './view-news/view-news.component';

import { ClientLogoComponent } from './client-logo/client-logo.component';
import { AddLogoComponent } from './add-logo/add-logo.component';
import { AddMouComponent } from './add-mou/add-mou.component';
import { MouDetailsComponent } from './mou-details/mou-details.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { CertificationDetailsComponent } from './certification-details/certification-details.component';

const routes: Routes = [
  {path:'',
  component:BarComponent,
  children:[
 
    { path:'dashboard',component:DashboardComponent},
    { path:'contact-enquiry',component:ContactEnquiryComponent},
    { path:'career-enquiry',component:CareerEnquiryComponent},
    { path:'add-achievements',component:AddAchievementsComponent},
    { path:'add-news',component:AddNewsComponent},
    { path:'view-achievements',component:ViewAchievementsComponent},
    { path:'view-news',component:ViewNewsComponent},

    {  path:'port-det',component:PortfolioDetailsComponent},
    {  path:'port-form',component:PortfolioFormComponent},

    {  path:'count',component:CountComponent},
    {  path:'free-consultation',component:FreeConsultationComponent},
    {  path:'birthday',component:BirthdayComponent},

    {  path:'birthday-form',component:BirthdayFormComponent},

    {  path:'event-details',component:EventDetailsComponent},
    {  path:'event-add',component:EventAddComponent},
    {  path:'team',component:TeamComponent},
  
    {  path:'forgot-form',component:ForgotPasswordComponent},

    {  path:'forgot-form',component:ForgotPasswordComponent},    //P's modules
    {  path:'port-form',component:PortfolioFormComponent},
    {  path:'port-det',component:PortfolioDetailsComponent},
    {  path:'add-logo',component:AddLogoComponent},
    {  path:'client-logo',component:ClientLogoComponent},
    {  path:'add-mou',component:AddMouComponent},
    {  path:'mou-det',component:MouDetailsComponent},
    {  path:'add-cert',component:AddCertificationComponent},
    {  path:'cert-det',component:CertificationDetailsComponent},
    {  path:' ',redirectTo:'/main/home',pathMatch:'full'},

    { path:'award-det',component:AwardDetComponent},
    { path:'add-awards',component:AddAwardsComponent},
    { path:'add-appreciation',component:AddAppreciationComponent},
    { path:'appreciation-det',component:AppreciationDetComponent},
    { path:'add-training',component:AddTrainingComponent},
    { path:'training-det',component:TrainingDetComponent},
    { path:'questions',component:QuestionsComponent},
    { path:'quote',component:QuoteComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
