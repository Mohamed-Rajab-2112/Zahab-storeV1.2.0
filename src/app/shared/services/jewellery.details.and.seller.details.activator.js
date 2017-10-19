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
var router_1 = require("@angular/router");
var jewellery_service_1 = require("./jewellery.service");
var seller_service_1 = require("./seller.service");
var JewelleryAndSellerDetailsActivator = (function () {
    function JewelleryAndSellerDetailsActivator(jewellery, seller, router) {
        this.jewellery = jewellery;
        this.seller = seller;
        this.router = router;
    }
    JewelleryAndSellerDetailsActivator.prototype.canActivate = function (route) {
        console.log(route);
        var youCanRoute = false;
        if (route.component['name'] == 'JewelleryDetailsComponent') {
            youCanRoute = !!this.jewellery.getJewelleryById(Number(route.params['id']));
        }
        else if (route.component['name'] == 'SellerDetailsComponent') {
            youCanRoute = !!this.seller.getSellerById(Number(route.params['id']));
        }
        if (!youCanRoute) {
            this.router.navigate(['/home']);
        }
        return youCanRoute;
    };
    return JewelleryAndSellerDetailsActivator;
}());
JewelleryAndSellerDetailsActivator = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [jewellery_service_1.JewelleryService, seller_service_1.SellerService, router_1.Router])
], JewelleryAndSellerDetailsActivator);
exports.JewelleryAndSellerDetailsActivator = JewelleryAndSellerDetailsActivator;
//# sourceMappingURL=jewellery.details.and.seller.details.activator.js.map