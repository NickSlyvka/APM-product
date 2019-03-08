import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './home/welcome.component';

import { ProductModule } from './products/product.module';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { UserComponent } from './users/user.component';

import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

let config = new AuthServiceConfig([
  {
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider("second-form-233112")
  },
  {
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider("632354740557355")
  },
  {
  id: LinkedInLoginProvider.PROVIDER_ID,
  provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
  }
 ]);
 
  export function provideConfig() {
  return config;
 }


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent, 
    UserComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
