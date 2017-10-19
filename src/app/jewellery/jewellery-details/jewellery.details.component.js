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
var auth_service_1 = require("../../shared/services/auth.service");
var customer_service_1 = require("../../shared/services/customer.service");
var seller_service_1 = require("../../shared/services/seller.service");
var registered_icons_service_1 = require("../../shared/services/registered.icons.service");
var JewelleryDetailsComponent = (function () {
    function JewelleryDetailsComponent(jewellery, route, auth, customer, seller, rgisteredIcons) {
        this.jewellery = jewellery;
        this.route = route;
        this.auth = auth;
        this.customer = customer;
        this.seller = seller;
        this.rgisteredIcons = rgisteredIcons;
    }
    JewelleryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.route.params.forEach(function (params) {
            _this.jewelleryDetails = _this.jewellery.getJewelleryById(Number(params["id"]));
            _this.jewelleryDetails.sellerDetails = _this.seller.getSellerById(_this.jewelleryDetails.sellerId);
            console.log(_this.jewelleryDetails);
        });
        this.selectedImage = this.jewelleryDetails.imageUrl[0];
        this.userSubscription = this.auth.user.subscribe(function (user) {
            _this.showFavouriteBtn = user.userType == 'Customer';
        });
        this.rgisteredIcons.addRegisteredSvgIcons();
    };
    JewelleryDetailsComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    JewelleryDetailsComponent.prototype.favouriteBtnStatus = function (product) {
        return this.customer.checkItemAlreadyInFavourite(product);
    };
    JewelleryDetailsComponent.prototype.applySelectedImage = function (image) {
        this.selectedImage = image;
    };
    JewelleryDetailsComponent.prototype.selectedImageClass = function (image) {
        if (image == this.selectedImage) {
            return 'selectedimage';
        }
    };
    return JewelleryDetailsComponent;
}());
JewelleryDetailsComponent = __decorate([
    core_1.Component({
        selector: "jeweller-details",
        templateUrl: "./jewellery.details.template.html",
        styleUrls: ["./jewellery.details.styles.css"]
    }),
    __metadata("design:paramtypes", [index_1.JewelleryService, router_1.ActivatedRoute, auth_service_1.AuthService, customer_service_1.CustomerService, seller_service_1.SellerService, registered_icons_service_1.RegisteredIcons])
], JewelleryDetailsComponent);
exports.JewelleryDetailsComponent = JewelleryDetailsComponent;
//# sourceMappingURL=jewellery.details.component.js.map