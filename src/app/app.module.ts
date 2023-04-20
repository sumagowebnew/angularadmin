import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './auth-components/login/login.component';
import { NotFoundComponent } from './auth-components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
// import { PortfolioFormComponent } from './modules/main/portfolio-form/portfolio-form.component';
import { FreeConsultationComponent } from './modules/main/free-consultation/free-consultation.component';
import { BirthdayComponent } from './modules/main/birthday/birthday.component';
import { EventDetailsComponent } from './modules/main/event-details/event-details.component';
import { EventAddComponent } from './modules/main/event-add/event-add.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,
    //auth modules
    LoginComponent,
    NotFoundComponent,
    //main modules
    BarComponent,
    HomeComponent,
    PortfolioDetailsComponent,
    FreeConsultationComponent,
    BirthdayComponent,
    CountComponent,
    // PortfolioFormComponent,
    ForgotPasswordComponent,
    EventDetailsComponent,
    EventAddComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
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
