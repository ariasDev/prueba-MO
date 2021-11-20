import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component'
import { RegistrationPageComponent } from './components/registration-page/registration-page.component'
import { ProfilePageComponent } from './components/profile-page/profile-page.component'
import { AuthGuardService } from './services/auth-guard.service'
import { UserLoguedGuardService } from './services/user-logued-guard.service'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, pathMatch: 'full', canActivate: [UserLoguedGuardService] },
  { path: 'signup', component: RegistrationPageComponent, pathMatch: 'full', canActivate: [UserLoguedGuardService] },
  { path: 'profile', component: ProfilePageComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
