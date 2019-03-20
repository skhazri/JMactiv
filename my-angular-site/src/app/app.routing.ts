import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreeractiviteComponent } from './creeractivite/creeractivite.component';
import { AfficheractiviteComponent } from './afficheractivite/afficheractivite.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModalModule } from "ngx-bootstrap";
import {MalisteactiviteComponent} from "./malisteactivite/malisteactivite.component";
import {FormsModule} from "@angular/forms";


export const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  // {
  //     path:'**',
  //     redirectTo: '',
  //     pathMatch: 'full'
  // },
  {
    path: 'profile',
    //canActivate: [AuthGuard],
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

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    FormsModule],
  exports: [RouterModule]
})

export class AppRouting{}