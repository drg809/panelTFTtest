import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InsertUsersComponent } from './components/insert-user/insert-user.component';
import { LoginUsersComponent } from './components/login-user/login-user.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideboardComponent } from './components/sideboard/sideboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    InsertUsersComponent,
    LoginUsersComponent,
    DashboardComponent,
    SideboardComponent,
    FooterComponent,
    ProfileComponent
  ],
  exports: [ MatSidenavModule ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        // throwNoTokenError: true,
        tokenGetter: tokenGetter,
        allowedDomains: [environment.api_url_sin_protocolo],
        // blacklistedRoutes son rutas que no queremos inyectar el bearer token
        disallowedRoutes: [
          environment.api_url_sin_protocolo + '/login/',
          environment.api_url_sin_protocolo + '/sendResetLinkEmail',
        ],
      },
    }),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
