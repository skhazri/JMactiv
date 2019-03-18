import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { SocialLoginModule, FacebookLoginProvider, AuthServiceConfig } from 'angular-6-social-login';
import { LoginComponent } from './login/login.component';
import { getAuthServiceConfigs } from "../../facebookConfig";
import { AuthentificationComponent } from './authentification/authentification.component';
import { ChercherComponent } from './chercher/chercher.component';
import { CreeractiviteComponent } from './creeractivite/creeractivite.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FacebookService } from './services/facebook.service'
import { AfficheractiviteComponent } from './afficheractivite/afficheractivite.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ShareButtonModule } from '@ngx-share/button';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareComponent } from './share/share.component';
import { LogoutComponent } from './logout/logout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


//Decorator
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthentificationComponent,
    ChercherComponent,
    CreeractiviteComponent,
    AccueilComponent,
    AfficheractiviteComponent,
    NotFoundComponent,
    AboutComponent,
    ShareComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRouting,
    HttpModule,
    HttpClientModule,      
    HttpClientJsonpModule,
    ShareButtonModule,
    Ng2SearchPipeModule ,
    FormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    },
    FacebookService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
