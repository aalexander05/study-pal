import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThoughtForSave } from 'src/app/Dtos/thought-for-save';
import { ErrorContainer } from 'src/app/classes/errorContainer';
import { handleError } from 'src/app/classes/errorHandler';
import { ThoughtService } from 'src/app/services/thought.service';

@Component({
  selector: 'app-add-thought',
  templateUrl: './add-thought.component.html'
})
export class AddThoughtComponent {
  thoughtText: string = ""
  showRequiredMessage: boolean = false;
  errorContainer: ErrorContainer = new ErrorContainer();

  constructor(private thoughtService: ThoughtService,
    private router: Router) {}

  submit(): void {
    this.showRequiredMessage = !this.thoughtText;

    if (this.showRequiredMessage) {
      return;
    }

    const newThought: ThoughtForSave = {
      text: this.thoughtText
    };

    this.thoughtService.saveThought(newThought).subscribe({
      next: res => {
        console.log('Thought saved.');
        this.router.navigate(['home'])
      },
      error: (error) => handleError(error, this.errorContainer)
    });
  }

}
