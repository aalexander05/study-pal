import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThoughtForView } from '../../Dtos/thought-for-view';
import { ThoughtService } from '../../services/thought.service';
import { ErrorContainer } from 'src/app/classes/errorContainer';
import { handleError } from 'src/app/classes/errorHandler';

@Component({
  selector: 'app-thought-home',
  templateUrl: './thought-home.component.html'
})
export class ThoughtHomeComponent implements OnInit {
  thoughts: ThoughtForView[] = [];
  errorContainer: ErrorContainer = new ErrorContainer();

  constructor(private thoughtService: ThoughtService) {}

  ngOnInit(): void {
      this.thoughtService.getRecentThoughts().subscribe({
        next: res => {
        this.thoughts = res;
      },
      error: (error: HttpErrorResponse) => handleError(error, this.errorContainer)
    });
  }

}
