import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
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
