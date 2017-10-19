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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var index_1 = require("../index");
var VendorProfileActivator = (function () {
    function VendorProfileActivator(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    VendorProfileActivator.prototype.canActivate = function () {
        var _this = this;
        var res = false;
        this.auth.user.subscribe(function (val) {
            _this.auth.isAuth.subscribe(function (isAuth) {
                console.log(isAuth);
                res = isAuth && val.userType === 'Vendor';
            });
        }, function (err) {
            console.log(err);
        }, function () {
        });
        if (!res) {
            this.router.navigate(['/home']);
        }
        return res;
    };
    return VendorProfileActivator;
}());
VendorProfileActivator = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.AuthService, router_1.Router])
], VendorProfileActivator);
exports.VendorProfileActivator = VendorProfileActivator;
//# sourceMappingURL=vendor.auth.activator.service.js.map