import { Component, Input } from '@angular/core';
import { ThoughtForView } from 'src/app/Dtos/thought-for-view';

@Component({
  selector: 'thought',
  templateUrl: './thought.component.html'
})
export class ThoughtComponent {
  @Input() thought: ThoughtForView | undefined;

}
