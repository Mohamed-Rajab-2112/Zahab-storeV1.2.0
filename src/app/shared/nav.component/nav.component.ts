import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  HostListener,
  ViewEncapsulation
} from "@angular/core";
import {Router} from "@angular/router";
import {JewelleryService} from "../services/jewellery.service";
import {AuthService} from "../services/auth.service";
import {CustomerService} from "../services/customer.service";
import {MdDialog} from "@angular/material";
import {SignUpDialog} from "../signup.component/signup.dialog.component";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: "nav-component",
  templateUrl: "./nav.component.template.html",
  styleUrls: ["./nav.component.styles.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class NavComponent implements OnInit, OnDestroy {
  userSubscription: any;
  favouriteSubscription: any;
  signInToggle: boolean;
  toggleLogInBtn: boolean;
  userName: string;
  userType: string;
  favouriteCount: number;
  showFavourite: boolean;
  activeLable: string;
  tabNum: number;
  currentActiveItem: string;
  activeClass: string[];
  fixedClass: string[];
  hideFixedNavPlaceholder: boolean;
  toggleSmallNavClass: string[];
  toggleSmallMenuBackground: boolean;
  dialogRef: any;

  constructor(private router: Router, private jewellery: JewelleryService, private auth: AuthService, private customer: CustomerService, private dialog: MdDialog, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.userSubscription = this.auth.user.subscribe((value) => {
      this.userName = value.name;
      this.userType = value.userType;
      this.showFavourite = value.userType == 'Customer';
    });

    this.auth.isAuth.subscribe((isAuth) => {
      this.toggleLogInBtn = !isAuth;
    });

    this.favouriteSubscription = this.customer.favouriteJewellery.subscribe((value) => {
      this.favouriteCount = value.length;
    });

    this.hideFixedNavPlaceholder = true;

    this.toggleSmallNavClass = ['translate-menu-close'];

    this.toggleSmallMenuBackground = false;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.favouriteSubscription.unsubscribe();
  }

  setSignInToggle(toggle: boolean) {
    this.signInToggle = toggle;
  }

  toggleSignInFormClass() {
    if (this.signInToggle) {
      return ['sign-in', 'show-sign-in']
    } else if (!this.signInToggle) {
      return ['sign-in', 'hide-sign-in']
    }
  }

  toggleSignInFlag(tabNum: number) {
    this.signInToggle = !this.signInToggle;
    this.tabNum = tabNum;
  }

  routeToProfile() {
    this.auth.user.subscribe((user) => {
      if (user.userType === 'Customer') {
        this.router.navigate(['customer/customer-profile'])
      } else if (user.userType === 'Vendor') {
        this.router.navigate(['seller/vendor-profile'])
      }
    });
  }

  routeToFavouriteJewellery() {
    this.router.navigate((['customer/customer-favourite-jewellery']))
  }

  showLable(activeLable: string) {
    this.activeLable = activeLable;
  }

  hideLable() {
    this.activeLable = null;
  }

  toggleLable(activeLable: string) {
    if (this.activeLable == activeLable) {
      return ['show-lable']
    }
    if (activeLable == this.currentActiveItem) {
      return ['show-lable']
    }
    else {
      return []
    }
  }

  setCurrentActiveNavItem(item: string) {
    this.currentActiveItem = item;

    this.auth.navIsActive.subscribe((navIsActive) => {
      if (item == this.currentActiveItem && navIsActive) {
        this.activeClass = ['active']
      }
      else {
        this.activeClass = []
      }
    });
    this.auth.setNavActive(true);
  }

  toggleActiveItem(ownItem: string) {
    if (ownItem == this.currentActiveItem) {
      return this.activeClass;
    }
  }

  signupVendor() {
    // this.dialogRef = this.dialog.open(SignUpDialog, {
    //   width: '500px'
    // })
    this.modalService.open(SignUpDialog, {
      keyboard: true
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(number);
    if (number > 35) {
      this.fixedClass = ['fixed'];
      this.hideFixedNavPlaceholder = false;
      // this.navTopOffset = {top: '0'};
    } else {
      // this.navTopOffset = {top: '35px'};
      this.fixedClass = ['relative'];
      this.hideFixedNavPlaceholder = true;
    }
  }

  toggleMenu() {
    console.log('toggle nav');
    this.toggleSmallNavClass = String(this.toggleSmallNavClass) === String(['translate-menu-close']) ? ['translate-menu-open'] : ['translate-menu-close'];
    this.toggleSmallMenuBackground = !this.toggleSmallMenuBackground;
  }
}
