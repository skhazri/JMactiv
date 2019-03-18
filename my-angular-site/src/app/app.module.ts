import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from "@angular/common/http";
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
import { MalisteactiviteComponent } from './malisteactivite/malisteactivite.component';


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
    MalisteactiviteComponent


  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRouting,
    HttpModule,
    HttpClientModule
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


export class AppModule {

}
