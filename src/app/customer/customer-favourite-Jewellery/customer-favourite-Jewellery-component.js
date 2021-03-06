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
var customer_service_1 = require("../../shared/services/customer.service");
var auth_service_1 = require("../../shared/services/auth.service");
var JewelleryFavouriteComponent = (function () {
    function JewelleryFavouriteComponent(customer, auth) {
        this.customer = customer;
        this.auth = auth;
    }
    JewelleryFavouriteComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.favouriteJewelleryList = this.customer.favouriteJewellery.value;
        this.userName = this.auth.user.value.name;
    };
    return JewelleryFavouriteComponent;
}());
JewelleryFavouriteComponent = __decorate([
    core_1.Component({
        selector: 'jewellery-favourite',
        templateUrl: './customer-favourite-Jewellery-template.html',
        styleUrls: ['./customer-favourite-Jewellery-styles.css']
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService, auth_service_1.AuthService])
], JewelleryFavouriteComponent);
exports.JewelleryFavouriteComponent = JewelleryFavouriteComponent;
//# sourceMappingURL=customer-favourite-Jewellery-component.js.map