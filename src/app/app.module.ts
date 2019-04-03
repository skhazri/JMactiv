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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule, MatDatepickerModule, NativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, ErrorStateMatcher, MatDialogModule, MatRadioModule } from '@angular/material';
import { MatTimeSelectModule, MatNativeTimeModule } from 'ngx-material-time-select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule,MatPaginatorModule} from '@angular/material';
import { ErrorComponent } from './error/error.component';

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
    LogoutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AppRouting,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTimeSelectModule,
    MatNativeTimeModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatRadioModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    },
    FacebookService,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreeractiviteComponent,ErrorComponent]
})

export class AppModule { }
