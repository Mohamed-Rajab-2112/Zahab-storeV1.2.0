import {Injectable} from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Injectable()

export class RegisteredIcons {
  constructor(private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
  }

  addRegisteredSvgIcons() {
    this.iconRegistry.addSvgIcon('arrow', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/arrow.svg'));
    this.iconRegistry.addSvgIcon('check', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/check.svg'));
    this.iconRegistry.addSvgIcon('info', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/info-icon.svg'));
  }
}
