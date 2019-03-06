import { RouterModule} from "@angular/router";
import  {Routes} from "@angular/router";
import {AuthentificationComponent} from "./authentification/authentification.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AuthGuard} from "./auth/auth.guard";

export const routes: Routes = [

    {
        path: '', //ToDo
        component: AccueilComponent
    }
    ,
    {
        path: 'dashboard', //ToDo
        component: LoginComponent
    },
    {
        path: 'toBeNamed', //ToDo
        canActivate: [AuthGuard],
        component: AuthentificationComponent
    },
    {
        path:'**',
        redirectTo: '',
        component: AccueilComponent
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

