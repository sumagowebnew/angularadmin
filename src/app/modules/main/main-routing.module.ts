import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';

const routes: Routes = [
  {path:'',
  component:BarComponent,
  children:[
    {  path:'home',component:HomeComponent},
    {  path:'port-det',component:PortfolioDetailsComponent},
    {  path:'port-form',component:PortfolioFormComponent},
    {  path:' ',redirectTo:'/main/home',pathMatch:'full'},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
