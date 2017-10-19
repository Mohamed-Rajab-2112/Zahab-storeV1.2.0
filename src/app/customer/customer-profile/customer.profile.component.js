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
var forms_1 = require("@angular/forms");
var jewellery_service_1 = require("../../shared/services/jewellery.service");
var CustomerProfile = (function () {
    function CustomerProfile(auth, customer, jewellery) {
        this.auth = auth;
        this.customer = customer;
        this.jewellery = jewellery;
    }
    CustomerProfile.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.areas = this.jewellery.getAreas();
        this.userSubscription = this.auth.user.subscribe(function (val) {
            console.log(val);
            _this.currentCustomer = val;
        });
        this.areaControl = new forms_1.FormControl(this.currentCustomer.area);
        this.nameControl = new forms_1.FormControl(this.currentCustomer.name, [forms_1.Validators.required]);
        this.profileForm = new forms_1.FormGroup({
            area: this.areaControl,
            name: this.nameControl
        });
        this.filteredAreas = this.areaControl.valueChanges.startWith(null).map(function (val) { return val ? _this.filter(val, _this.areas) : _this.areas.slice(); });
    };
    CustomerProfile.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    CustomerProfile.prototype.filter = function (val, data) {
        return data.filter(function (type) { return new RegExp("^" + val, 'gi').test(type); });
    };
    CustomerProfile.prototype.updateProfileData = function (values) {
        console.log(values);
        this.customer.updateProfileData(values);
    };
    CustomerProfile.prototype.saveNewPassword = function (newPassword) {
        console.log(newPassword);
        this.auth.saveNewPassword(newPassword);
    };
    CustomerProfile.prototype.deleteAccount = function () {
        this.auth.deleteAccount();
    };
    return CustomerProfile;
}());
CustomerProfile = __decorate([
    core_1.Component({
        selector: 'customer-profile',
        templateUrl: './customer.profile.template.html',
        styleUrls: ['./customer.profile.styles.css']
    }),
    __metadata("design:paramtypes", [index_1.AuthService, index_1.CustomerService, jewellery_service_1.JewelleryService])
], CustomerProfile);
exports.CustomerProfile = CustomerProfile;
//# sourceMappingURL=customer.profile.component.js.map