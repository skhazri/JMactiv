import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreeractiviteComponent } from './creeractivite/creeractivite.component';
import { AfficheractiviteComponent } from './afficheractivite/afficheractivite.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'team',
    component: AboutComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AuthentificationComponent
      },
      {
        path: 'events/:id',
        component: AfficheractiviteComponent
      }
    ]
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
