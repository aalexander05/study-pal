import { Component, Input } from '@angular/core';
import { ErrorContainer } from 'src/app/classes/errorContainer';

@Component({
  selector: 'api-error',
  templateUrl: './api-error.component.html'
})
export class ApiErrorComponent {
  @Input() errorContainer!: ErrorContainer;
}
