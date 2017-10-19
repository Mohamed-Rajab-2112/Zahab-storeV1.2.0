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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var CustomerService = (function () {
    function CustomerService(auth) {
        this.auth = auth;
        this.favouriteJewellery = new BehaviorSubject_1.BehaviorSubject([]);
    }
    CustomerService.prototype.updateProfileData = function (values) {
        console.log(values);
        var currentUserData = {};
        this.auth.user.subscribe(function (user) {
            currentUserData = user;
            for (var property in values) {
                if (values.hasOwnProperty(property)) {
                    currentUserData["" + property] = values["" + property];
                }
            }
        });
        this.auth.setUser(currentUserData);
    };
    CustomerService.prototype.checkItemAlreadyInFavourite = function (product) {
        return ~this.favouriteJewellery.value.indexOf(product);
    };
    CustomerService.prototype.addProductToFavourite = function (product) {
        !this.checkItemAlreadyInFavourite(product) && this.favouriteJewellery.value.push(product);
        this.favouriteJewellery.next(this.favouriteJewellery.value);
        console.log(this.favouriteJewellery);
    };
    CustomerService.prototype.removeProductToFavourite = function (product) {
        this.checkItemAlreadyInFavourite(product) && this.favouriteJewellery.value.splice(this.favouriteJewellery.value.indexOf(product), 1);
        this.favouriteJewellery.next(this.favouriteJewellery.value);
        console.log(this.favouriteJewellery);
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map