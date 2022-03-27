import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterLayoutModule } from './layout/master-layout.module';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AllAdsComponent } from './modules/pages/all-ads/all-ads.component';
import { MeModule } from './modules/me/me.module';
import { ProfileModule } from './modules/me/profile/profile.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllAdsComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    MasterLayoutModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NgbTooltipModule,
    MeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
