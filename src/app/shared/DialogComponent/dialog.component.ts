import {Component, Inject, OnInit, Input} from "@angular/core";
// import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
// import {OnInit} from ''
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './dialogTemplate.html',
  styleUrls: ['./dialogTemplate.css']
})

export class DialogComponent /*implements OnInit*/ {
  @Input() dialogContent;

  constructor(public dialogRef: NgbActiveModal) {
  }

  // ngOnInit() {
  //   console.log(this.dialogContent)
  // }
  closeDialog(result: boolean) {
    this.dialogRef.close(result);
  }
}
