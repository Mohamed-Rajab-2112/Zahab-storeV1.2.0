import {Component} from "@angular/core";
import {MdDialog} from "@angular/material";
import {SignUpDialog} from "../signup.component/signup.dialog.component";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "footer-component",
  templateUrl: './footer.template.html',
  styleUrls: ['./footer.styles.css']
})

export class FooterComponent {
  dialogRef: any;
  constructor(private dialog:MdDialog, private modalService:NgbModal) {

  }

  signupVendor() {
    // this.dialogRef = this.dialog.open(SignUpDialog, {
    //   width: '500px'
    // })
    this.dialogRef = this.modalService.open(SignUpDialog);
    this.dialogRef.componentInstance.name='world';
  }
}
