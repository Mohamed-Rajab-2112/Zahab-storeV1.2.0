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
var index_1 = require("../../shared/index");
var SellerDetailsComponent = (function () {
    function SellerDetailsComponent(jewellery, seller, route) {
        this.jewellery = jewellery;
        this.seller = seller;
        this.route = route;
    }
    SellerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.route.params.forEach(function (params) {
            _this.sellingList = _this.jewellery.getJewelleryBySellerId(Number(params['id']));
            _this.sellerDetails = _this.seller.getSellerById(Number(params['id']));
        });
    };
    return SellerDetailsComponent;
}());
SellerDetailsComponent = __decorate([
    core_1.Component({
        selector: 'seller-details',
        templateUrl: 'app/seller/seller-details/seller.details.template.html',
        styleUrls: ['app/seller/seller-details/seller.details.styles.css']
    }),
    __metadata("design:paramtypes", [index_1.JewelleryService, index_1.SellerService, router_1.ActivatedRoute])
], SellerDetailsComponent);
exports.SellerDetailsComponent = SellerDetailsComponent;
//# sourceMappingURL=seller.details.component.js.map