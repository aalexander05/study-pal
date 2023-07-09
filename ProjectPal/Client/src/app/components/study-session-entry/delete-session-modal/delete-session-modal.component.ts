import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-session-modal',
  templateUrl: './delete-session-modal.component.html'
})
export class DeleteSessionModalComponent {
  @Output() onClose = new EventEmitter();

  deleteStudySession() {
    this.onClose.emit(true);
  }

  closeModal() {
    this.onClose.emit(false);
  }

}
