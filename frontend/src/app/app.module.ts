import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserRegistrationPageComponent } from './pages/user-registration-page/user-registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    UserRegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
