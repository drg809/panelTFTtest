import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { InsertUsersComponent } from './components/insert-user/insert-user.component';
import { LoginUsersComponent } from './components/login-user/login-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideboardComponent } from './components/sideboard/sideboard.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: InsertUsersComponent
  },
  {
    path: 'login',
    component: LoginUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
