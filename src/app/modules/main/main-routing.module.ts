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
import { BirthdayFormComponent } from './birthday-form/birthday-form.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventAddComponent } from './event-add/event-add.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'',
  component:BarComponent,
  children:[
    {  path:'home',component:HomeComponent},
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
    {  path:' ',redirectTo:'/main/home',pathMatch:'full'},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
