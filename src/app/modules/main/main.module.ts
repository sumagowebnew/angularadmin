import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CountComponent } from './count/count.component';
import { FreeConsultationComponent } from './free-consultation/free-consultation.component';
import { InquiryService } from './free-consultation/inquiry.service';
import { BirthdayComponent } from './birthday/birthday.component';



@NgModule({
  declarations: [
    FreeConsultationComponent,
    BirthdayComponent,
   
               

  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [InquiryService],
})
export class MainModule { }
