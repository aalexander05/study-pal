import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudySessionView } from 'src/app/Dtos/studySessionView';
import { ErrorContainer } from 'src/app/classes/errorContainer';
import { handleError } from 'src/app/classes/errorHandler';
import { StudySessionService } from 'src/app/services/study-session.service';

@Component({
  selector: 'app-study-session-entry',
  templateUrl: './study-session-entry.component.html'
})
export class StudySessionEntryComponent implements OnInit {
  sessionForm!: FormGroup;
  errorContainer: ErrorContainer = new ErrorContainer();

  constructor(private sessionService: StudySessionService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      studySessionId: [0],
      topic: [null, Validators.required],
      links: this.formBuilder.array([]),
      tags: this.formBuilder.array([]),
      minutesStudied: [0],
      notes: [null, Validators.required],
      dateStudied: [new Date().toISOString().slice(0, -14)],
    })

    const studySessionId = this.route.snapshot.paramMap.get('id');
    if (studySessionId) {
      this.sessionService.getByIdForUser(studySessionId)
        .subscribe(res => {
          res.dateStudied = new Date(res.dateStudied).toISOString().slice(0, -14)
          this.sessionForm.patchValue(res);
        })
    }

  }

  submit(): void {

    if (this.sessionForm?.invalid) {
      this.errorContainer.errorMessage = 'The form is invalid. Check your entries and try again.';
      this.sessionForm.markAllAsTouched();
      return;
    }

    const sessionRequest: StudySessionView = this.sessionForm?.value;

    if (sessionRequest.studySessionId) {
      this.sessionService.updateSession(sessionRequest).subscribe({
        next: res => {
          this.router.navigate(["summary"]);
        },
        error: (error: HttpErrorResponse) => handleError(error, this.errorContainer)
      });
    } else {
      this.sessionService.saveSession(sessionRequest).subscribe({
        next: res => {
          this.router.navigate(["summary"]);
        },
        error: (error: HttpErrorResponse) => handleError(error, this.errorContainer)
      });
    }
  }

  requiredAndTouched(control: AbstractControl) {
    return control.hasError("required") && control.touched;
  }

}
