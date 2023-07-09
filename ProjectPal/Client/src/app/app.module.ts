import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThoughtHomeComponent } from './components/thought-home/thought-home.component';
import { AllThoughtsComponent } from './components/all-thoughts/all-thoughts.component';
import { ThoughtComponent } from './components/thought/thought.component';
import { AddThoughtComponent } from './components/add-thought/add-thought.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './app-config-service.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { StudySessionEntryComponent } from './components/study-session-entry/study-session-entry.component';
import { AllStudySessionsComponent } from './components/all-study-sessions/all-study-sessions.component';
import { StudySummaryComponent } from './components/study-summary/study-summary.component';
import { ApiErrorComponent } from './components/api-error/api-error.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { DeleteSessionModalComponent } from './components/study-session-entry/delete-session-modal/delete-session-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ThoughtHomeComponent,
    AllThoughtsComponent,
    ThoughtComponent,
    AddThoughtComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    StudySessionEntryComponent,
    AllStudySessionsComponent,
    StudySummaryComponent,
    ApiErrorComponent,
    DeleteSessionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          //Make sure to return a promise!
          return appConfigService.loadAppConfig();
        };
      }
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
