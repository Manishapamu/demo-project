import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { IphoneComponent } from './iphone/iphone.component';
import { AndroidComponent } from './android/android.component';
import { HelpComponent } from './help/help.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'signup',component:SignupComponent},
    {
      path:'iphone',component:IphoneComponent
    },
    {path:'android',component:AndroidComponent
    },
    {path:'help',component:HelpComponent},
    {path:'company',component:CompanyComponent

    },
  
  {
    path:'**',component:PagenotfoundComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
