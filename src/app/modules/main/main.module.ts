import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { InquiryService } from './free-consultation/inquiry.service';
import { BirthdayFormComponent } from './birthday-form/birthday-form.component';
import { EventAddComponent } from './event-add/event-add.component';



@NgModule({
  declarations: [
    BirthdayFormComponent,
    // EventComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [InquiryService],
})
export class MainModule { }
