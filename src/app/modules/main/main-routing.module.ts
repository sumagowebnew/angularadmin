import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CountComponent } from './count/count.component';
import { FreeConsultationComponent } from './free-consultation/free-consultation.component';
import { BirthdayComponent } from './birthday/birthday.component';

import { QuestionsComponent } from './questions/questions.component';
import { QuoteComponent } from './quote/quote.component';
import { AddAwardsComponent } from './add-awards/add-awards.component';
import { AddAppreciationComponent } from './add-appreciation/add-appreciation.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { AwardDetComponent } from './award-det/award-det.component';
import { AppreciationDetComponent } from './appreciation-det/appreciation-det.component';
import { TrainingDetComponent } from './training-det/training-det.component';

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
    {  path:'home',component:HomeComponent},
 

    {  path:'count',component:CountComponent},
    {  path:'free-consultation',component:FreeConsultationComponent},
    {  path:'birthday',component:BirthdayComponent},

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
