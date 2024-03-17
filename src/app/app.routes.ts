import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PlansComponent } from './plans/plans.component';
import { AboutComponent } from './about/about.component';
import { authGardGuard } from './auth-gard.guard';

export const routes: Routes = [
    {
        'path': '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {  
                path: '',
                component: ProfileComponent,
                canActivate: [authGardGuard]
            },
            {  
                path: 'profile',
                component: ProfileComponent,
                canActivate: [authGardGuard]
            },
            {  
                path: 'plan',
                component: PlansComponent,
                canActivate: [authGardGuard]
            },
            {  
                path: 'about',
                component: AboutComponent,
                canActivate: [authGardGuard]
            }
        ],
    }, 
    {
        path: '**',
        redirectTo: 'login'
    }
];
