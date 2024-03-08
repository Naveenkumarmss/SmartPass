import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PlansComponent } from './plans/plans.component';

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
                component: ProfileComponent
            },
            {  
                path: 'profile',
                component: ProfileComponent
            },
            {  
                path: 'plan',
                component: PlansComponent
            }
        ]
    }, 
    {
        path: '**',
        redirectTo: 'login'
    }
];
