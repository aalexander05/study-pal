import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllThoughtsComponent } from './components/all-thoughts/all-thoughts.component';
import { AddThoughtComponent } from './components/add-thought/add-thought.component';
import { ThoughtHomeComponent } from './components/thought-home/thought-home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { StudySessionEntryComponent } from './components/study-session-entry/study-session-entry.component';
import { AllStudySessionsComponent } from './components/all-study-sessions/all-study-sessions.component';
import { StudySummaryComponent } from './components/study-summary/study-summary.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  // { path: 'home', component: ThoughtHomeComponent },
  // { path: 'all', component: AllThoughtsComponent },
  // { path: 'add', component: AddThoughtComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'enter-session', component: StudySessionEntryComponent, canActivate: [AuthGuardService] },
  { path: 'enter-session/:id', component: StudySessionEntryComponent, canActivate: [AuthGuardService]},
  { path: 'study-sessions-all', component: AllStudySessionsComponent, canActivate: [AuthGuardService] },
  { path: 'summary', component: StudySummaryComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'summary' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
