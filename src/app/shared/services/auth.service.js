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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Subject_1 = require("rxjs/Subject");
var router_1 = require("@angular/router");
var userTypes = ['Customer', 'Vendor'];
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.isAuth = new BehaviorSubject_1.BehaviorSubject(false);
        this.user = new BehaviorSubject_1.BehaviorSubject({});
        this.currentRoute = new Subject_1.Subject();
        this.navIsActive = new Subject_1.Subject();
        this.verificationAlertState = new BehaviorSubject_1.BehaviorSubject(true);
        this.verifiedVendorsAlertState = new BehaviorSubject_1.BehaviorSubject(true);
    }
    AuthService.prototype.logIn = function (values) {
        this.isAuth.next(true);
        var user = {
            id: 22222,
            name: values.userName,
            userType: 'Customer',
            verified: true,
            telephone1: 1232135,
            telephone2: 5841354,
            email: 'asdasdaasd@asdasd.com',
            area: 'AinShams/Cairo',
            imageUrl: 'app/images/log05.png',
            address: 'ay habal'
        };
        this.setUser(user);
        if (!user.telephone1 || !user.address) {
            this.setVerificationAlertState(true);
        }
        else {
            this.setVerificationAlertState(false);
        }
    };
    AuthService.prototype.setUser = function (currentUserData) {
        this.user.next(currentUserData);
    };
    AuthService.prototype.setCurrentRoute = function () {
        this.currentRoute.next(this.router.routerState.snapshot.url);
    };
    AuthService.prototype.setNavActive = function (value) {
        this.navIsActive.next(value);
    };
    AuthService.prototype.setVerificationAlertState = function (value) {
        this.verificationAlertState.next(value);
    };
    AuthService.prototype.setVerifiedVendorsAlertState = function (value) {
        this.verifiedVendorsAlertState.next(value);
    };
    AuthService.prototype.signUp = function (signUpData) {
        console.log(signUpData);
        return true;
    };
    AuthService.prototype.getUserTypes = function () {
        return userTypes;
    };
    AuthService.prototype.saveNewPassword = function (newPassword) {
        return true;
    };
    AuthService.prototype.deleteAccount = function () {
        return true;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map