import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './auth-components/login/login.component';
import { NotFoundComponent } from './auth-components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BarComponent } from './modules/main/bar/bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

import { MatExpansionModule, matExpansionAnimations } from '@angular/material/expansion';
import { PortfolioDetailsComponent } from './modules/main/portfolio-details/portfolio-details.component';
import { CountComponent } from './modules/main/count/count.component';
import { ForgotPasswordComponent } from './modules/main/forgot-password/forgot-password.component';

// import { PortfolioFormComponent } from './modules/main/portfolio-form/portfolio-form.component';
import { FreeConsultationComponent } from './modules/main/free-consultation/free-consultation.component';
import { BirthdayComponent } from './modules/main/birthday/birthday.component';
import { EventDetailsComponent } from './modules/main/event-details/event-details.component';
import { EventAddComponent } from './modules/main/event-add/event-add.component';

import { PortfolioFormComponent } from './modules/main/portfolio-form/portfolio-form.component';
import { DashboardComponent } from './modules/main/dashboard/dashboard.component';
import { CareerEnquiryComponent } from './modules/main/career-enquiry/career-enquiry.component';
import { ContactEnquiryComponent } from './modules/main/contact-enquiry/contact-enquiry.component';
import { ClientLogoComponent } from './modules/main/client-logo/client-logo.component';
import { AddLogoComponent } from './modules/main/add-logo/add-logo.component';
import { AddCertificationComponent } from './modules/main/add-certification/add-certification.component';
import { MouDetailsComponent } from './modules/main/mou-details/mou-details.component';
import { AddMouComponent } from './modules/main/add-mou/add-mou.component';
import { CertificationDetailsComponent } from './modules/main/certification-details/certification-details.component';
import { TeamComponent } from './modules/main/team/team.component';



@NgModule({
  declarations: [
    AppComponent,


    
   
    //auth modules

    LoginComponent,
    NotFoundComponent,
    BarComponent,
    PortfolioDetailsComponent,
    FreeConsultationComponent,
    BirthdayComponent,
    CountComponent,

    PortfolioFormComponent,
     ForgotPasswordComponent,



    // PortfolioFormComponent,
    ForgotPasswordComponent,
    EventDetailsComponent,
    EventAddComponent,


    ForgotPasswordComponent,

    PortfolioFormComponent,

    ForgotPasswordComponent,
    DashboardComponent,
    ContactEnquiryComponent,
    CareerEnquiryComponent,
    ForgotPasswordComponent,
     ClientLogoComponent,
    AddLogoComponent,
    AddCertificationComponent,
    CertificationDetailsComponent,
    AddMouComponent,
    MouDetailsComponent,
    ForgotPasswordComponent,
    EventAddComponent,
    EventDetailsComponent,
  




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,


    //angular material modules

    FormsModule,

    //angular material modules

    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatSortModule,
    MatExpansionModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
