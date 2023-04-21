import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './auth-components/login/login.component';
import { NotFoundComponent } from './auth-components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BarComponent } from './modules/main/bar/bar.component';
import { HomeComponent } from './modules/main/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';

import { MatExpansionModule, matExpansionAnimations } from '@angular/material/expansion';
import { PortfolioDetailsComponent } from './modules/main/portfolio-details/portfolio-details.component';
import { CountComponent } from './modules/main/count/count.component';
import { ForgotPasswordComponent } from './modules/main/forgot-password/forgot-password.component';
import { PortfolioFormComponent } from './modules/main/portfolio-form/portfolio-form.component';
import { ClientLogoComponent } from './modules/main/client-logo/client-logo.component';
import { AddLogoComponent } from './modules/main/add-logo/add-logo.component';
import { AddCertificationComponent } from './modules/main/add-certification/add-certification.component';
import { AddMouComponent } from './modules/main/add-mou/add-mou.component';
import { CertificationDetailsComponent } from './modules/main/certification-details/certification-details.component';
import { MouDetailsComponent } from './modules/main/mou-details/mou-details.component';
// import { AddLogoComponent } from './modules/main/add-logo/add-logo.component';



@NgModule({
  declarations: [
    AppComponent,

    MainComponent,
  
    //auth modules
    LoginComponent,
    NotFoundComponent,
    //main modules
    BarComponent,
    HomeComponent,
    PortfolioDetailsComponent,
    CountComponent,
    PortfolioFormComponent,

     ForgotPasswordComponent,
     
    ClientLogoComponent,
    AddLogoComponent,
    AddCertificationComponent,
    CertificationDetailsComponent,
    AddMouComponent,
    MouDetailsComponent,
    ForgotPasswordComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,

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
