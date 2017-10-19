"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../shared/index");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var jewellery_service_1 = require("../../shared/services/jewellery.service");
var SellerProfileEditComponent = (function () {
    function SellerProfileEditComponent(jewellery, seller, auth, sanitizer) {
        this.jewellery = jewellery;
        this.seller = seller;
        this.auth = auth;
        this.sanitizer = sanitizer;
        this.logoDetails = {};
    }
    SellerProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.user);
        this.verificationAlertStateSubscription = this.auth.verificationAlertState.subscribe(function (state) {
            _this.showVerificationAlert = state;
            console.log(_this.showVerificationAlert);
        });
        this.areas = this.jewellery.getAreas();
        this.areaControl = new forms_1.FormControl(this.user.area);
        this.addressControl = new forms_1.FormControl(this.user.address);
        this.filteredAreas = this.areaControl.valueChanges.startWith(null).map(function (val) { return val ? _this.filter(val, _this.areas) : _this.areas.slice(); });
        this.addressForm = new forms_1.FormGroup({
            area: this.areaControl,
            address: this.addressControl
        });
    };
    SellerProfileEditComponent.prototype.ngOnDestroy = function () {
        this.verificationAlertStateSubscription.unsubscribe();
    };
    SellerProfileEditComponent.prototype.filter = function (val, data) {
        return data.filter(function (type) { return new RegExp("^" + val, 'gi').test(type); });
    };
    SellerProfileEditComponent.prototype.updateProfile = function (newProfileDetails) {
        if (this.logoDetails.name) {
            newProfileDetails.logoUrl = this.logoDetails.name;
        }
        this.seller.postNewSellerDetails(newProfileDetails);
    };
    SellerProfileEditComponent.prototype.getLogo = function (logoFile) {
        var logo = logoFile.target.files[0];
        logo.url = URL.createObjectURL(logo);
        logo.url = this.sanitizer.bypassSecurityTrustResourceUrl(logo.url);
        this.logoDetails.name = logo.name;
        this.logoDetails.url = logo.url;
        console.log(this.logoDetails);
    };
    SellerProfileEditComponent.prototype.deleteLogo = function () {
        this.logoDetails = {};
        document.getElementById('logo').value = "";
    };
    SellerProfileEditComponent.prototype.verifyPhone = function (phones) {
        console.log(phones);
        this.seller.verifyPhone(phones);
    };
    SellerProfileEditComponent.prototype.verifyAddress = function (address) {
        console.log(address);
        this.seller.verifyAddress(address);
    };
    SellerProfileEditComponent.prototype.saveNewPassword = function (newPassword) {
        console.log(newPassword);
        this.auth.saveNewPassword(newPassword);
    };
    SellerProfileEditComponent.prototype.dismissVerificationAlert = function () {
        console.log('dismissed');
        this.auth.setVerificationAlertState(false);
    };
    SellerProfileEditComponent.prototype.deleteAccount = function () {
        this.auth.deleteAccount();
    };
    return SellerProfileEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SellerProfileEditComponent.prototype, "user", void 0);
SellerProfileEditComponent = __decorate([
    core_1.Component({
        selector: 'seller-profile-edit',
        templateUrl: './seller.profile.edit.template.html',
        styleUrls: ['./seller.profile.edit.styles.css']
    }),
    __metadata("design:paramtypes", [jewellery_service_1.JewelleryService, index_1.SellerService, index_1.AuthService, platform_browser_1.DomSanitizer])
], SellerProfileEditComponent);
exports.SellerProfileEditComponent = SellerProfileEditComponent;
//# sourceMappingURL=seller.profile.edit.component.js.map