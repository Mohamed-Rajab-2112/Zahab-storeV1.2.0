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
var auth_service_1 = require("../services/auth.service");
var registered_icons_service_1 = require("../services/registered.icons.service");
var SinginSignUpComponent = (function () {
    function SinginSignUpComponent(auth, rgisteredIcons) {
        this.auth = auth;
        this.rgisteredIcons = rgisteredIcons;
        this.signInToggleOutPut = new core_1.EventEmitter;
    }
    SinginSignUpComponent.prototype.ngOnInit = function () {
        this.signInToggle = true;
        this.userTypes = this.auth.getUserTypes();
        this.rgisteredIcons.addRegisteredSvgIcons();
    };
    SinginSignUpComponent.prototype.logIn = function (values) {
        this.auth.logIn(values);
        this.signInToggle = false;
        this.signInToggleOutPut.emit(this.signInToggle);
    };
    SinginSignUpComponent.prototype.signUp = function (values) {
        values.signUpDate = new Date(Date.now()).toISOString();
        values.userType = this.choosedUserType;
        console.log(values);
        this.signInToggle = false;
        this.signInToggleOutPut.emit(this.signInToggle);
        this.auth.signUp(values);
    };
    SinginSignUpComponent.prototype.toggleSignInFlag = function () {
        this.signInToggle = !this.signInToggleInput;
        console.log(this.signInToggle);
        this.signInToggleOutPut.emit(this.signInToggle);
    };
    SinginSignUpComponent.prototype.toggleTab = function (tabNum) {
        if (tabNum == 0) {
            this.signUpNameStyle = "{'font-weight': 100}";
        }
        else if (tabNum == 1) {
            this.logInNameStyle = "{'font-weight': 100}";
        }
        this.tabNum = tabNum;
    };
    SinginSignUpComponent.prototype.selectTab = function () {
        return { 'transform': 'translate(' + this.tabNum * -50 + '%)' };
    };
    SinginSignUpComponent.prototype.translateArrow = function () {
        if (this.tabNum == 0) {
            return { 'left': '80px' };
        }
        else if (this.tabNum == 1) {
            return { 'left': '235px' };
        }
    };
    return SinginSignUpComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SinginSignUpComponent.prototype, "signInToggleOutPut", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SinginSignUpComponent.prototype, "signInToggleInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SinginSignUpComponent.prototype, "tabNum", void 0);
SinginSignUpComponent = __decorate([
    core_1.Component({
        selector: 'signin-signup',
        templateUrl: 'app/shared/signin.signup.component/signin.signup.template.html',
        styleUrls: ['app/shared/signin.signup.component/signin.signup.styles.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, registered_icons_service_1.RegisteredIcons])
], SinginSignUpComponent);
exports.SinginSignUpComponent = SinginSignUpComponent;
//# sourceMappingURL=signin.signup.component.js.map