import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    BarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
