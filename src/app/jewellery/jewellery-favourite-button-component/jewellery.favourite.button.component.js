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
var JewelleryFavouriteBtn = (function () {
    function JewelleryFavouriteBtn(customer) {
        this.customer = customer;
    }
    JewelleryFavouriteBtn.prototype.addProductToFavourite = function (product) {
        this.customer.addProductToFavourite(product);
        this.isFavourite = true;
    };
    JewelleryFavouriteBtn.prototype.removeProductToFavourite = function (product) {
        this.customer.removeProductToFavourite(product);
        this.isFavourite = true;
    };
    return JewelleryFavouriteBtn;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JewelleryFavouriteBtn.prototype, "product", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], JewelleryFavouriteBtn.prototype, "isFavourite", void 0);
JewelleryFavouriteBtn = __decorate([
    core_1.Component({
        selector: 'jewellery-favourite-button',
        templateUrl: './jewellery.favourite.button.template.html',
        styleUrls: ['./jewellery.favourite.button.styles.css']
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], JewelleryFavouriteBtn);
exports.JewelleryFavouriteBtn = JewelleryFavouriteBtn;
//# sourceMappingURL=jewellery.favourite.button.component.js.map