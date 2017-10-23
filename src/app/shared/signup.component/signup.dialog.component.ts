import {Component} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './signup.dialog.template.html'
})

export class SignUpDialog {
  constructor(public activeModal: NgbActiveModal) {
  }

  // closeDialog() {
  //   this.dialogRef.close();
  // }

  closeDialog() {
    this.activeModal.close();
  }

}
