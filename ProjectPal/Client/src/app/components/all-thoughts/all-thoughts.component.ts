import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThoughtForView } from '../../Dtos/thought-for-view';
import { ThoughtService } from '../../services/thought.service';
import { handleError } from 'src/app/classes/errorHandler';
import { ErrorContainer } from 'src/app/classes/errorContainer';

@Component({
  selector: 'app-all-thoughts',
  templateUrl: './all-thoughts.component.html'
})
export class AllThoughtsComponent implements OnInit {
  thoughts: ThoughtForView[] = [];
  errorMessage: string = "";
  errorContainer: ErrorContainer = new ErrorContainer();

  constructor(private thoughtService: ThoughtService) {}

  ngOnInit(): void {
    this.thoughtService.getAllThoughts().subscribe({
      next: res => {
        this.thoughts = res;
      },
      error: (error: HttpErrorResponse) => handleError(error, this.errorContainer)
    });
  }

}
