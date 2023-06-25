import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudySummary } from 'src/app/Dtos/studySummary';
import { ErrorContainer } from 'src/app/classes/errorContainer';
import { handleError } from 'src/app/classes/errorHandler';
import { StudySessionService } from 'src/app/services/study-session.service';

@Component({
  selector: 'app-study-summary',
  templateUrl: './study-summary.component.html'
})
export class StudySummaryComponent implements OnInit {
  summary!: StudySummary
  errorContainer: ErrorContainer = new ErrorContainer();

  constructor(private studySessionService: StudySessionService) {

  }

  ngOnInit(): void {
    this.studySessionService.getSummary().subscribe({
      next: res => {
        this.summary = res;
      },
      error: (error: HttpErrorResponse) => handleError(error, this.errorContainer)
    });
  }
}
