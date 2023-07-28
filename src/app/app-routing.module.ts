import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { NotFoundComponent } from './auth-components/not-found/not-found.component';
import { RegisterComponent } from './auth-components/register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {
    path:'main',
    loadChildren:()=>
    import("./modules/main/main.module").then((m)=>m.MainModule),
    // canActivate:[AuthGuard]
  },
  {path:'**',component:NotFoundComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }