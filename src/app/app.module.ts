import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { IphoneComponent } from './iphone/iphone.component';
import { AndroidComponent } from './android/android.component';
import { CompanyComponent } from './company/company.component';
import { HelpComponent } from './help/help.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { AndroidUsersComponent } from './welcome/android-users/android-users.component';
import { MobilesecurityComponent } from './welcome/mobilesecurity/mobilesecurity.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';
import { AboutComponent } from './welcome/about/about.component';
import { FindComponent } from './welcome/find/find.component';
import { LatestInsightsComponent } from './welcome/latest-insights/latest-insights.component';
import { AppMobileSecurityComponent } from './welcome/app-mobile-security/app-mobile-security.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    IphoneComponent,
    AndroidComponent,
    CompanyComponent,
    HelpComponent,
    BannerComponent,
    AndroidUsersComponent,
    MobilesecurityComponent,
    SpywareComponent,
    AboutComponent,
    FindComponent,
    LatestInsightsComponent,
    AppMobileSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
