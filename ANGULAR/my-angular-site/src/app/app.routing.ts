import { RouterModule} from "@angular/router";
import  {Routes} from "@angular/router";
import {AuthentificationComponent} from "./authentification/authentification.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [

    {
        path: '', //ToDo
        component: AppComponent
    }
    ,
    {
        path: 'dashboard', //ToDo
        component: LoginComponent
    },
    {
        path: 'toBeNamed', //ToDo
        component: AuthentificationComponent
    }
    ];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

