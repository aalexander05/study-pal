import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { StudySessionView } from 'src/app/Dtos/studySessionView';
import { ErrorContainer } from 'src/app/classes/errorContainer';
import { handleError } from 'src/app/classes/errorHandler';
import { StudySessionService } from 'src/app/services/study-session.service';

@Component({
  selector: 'app-study-session-summary',
  templateUrl: './all-study-sessions.component.html'
})
export class AllStudySessionsComponent implements OnInit {
  studySessions$ : Observable<StudySessionView[]> | undefined
  errorContainer: ErrorContainer = new ErrorContainer();
  
  constructor(private sessionService: StudySessionService) {}

  ngOnInit(): void {
    this.studySessions$ = this.sessionService.getAllSessions()
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            handleError(err, this.errorContainer);
          }
          return EMPTY;
        })
      )
  }

}
