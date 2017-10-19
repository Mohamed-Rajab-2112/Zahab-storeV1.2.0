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
var auth_service_1 = require("../../shared/services/auth.service");
var jewellery_service_1 = require("../../shared/services/jewellery.service");
var customer_service_1 = require("../../shared/services/customer.service");
var seller_service_1 = require("../../shared/services/seller.service");
var material_1 = require("@angular/material");
var dialog_component_1 = require("../../shared/DialogComponent/dialog.component");
var JewelleryThumbnailComponent = (function () {
    function JewelleryThumbnailComponent(seller, jewellery, auth, router, customer, dialog) {
        this.seller = seller;
        this.jewellery = jewellery;
        this.auth = auth;
        this.router = router;
        this.customer = customer;
        this.dialog = dialog;
    }
    JewelleryThumbnailComponent.prototype.routingToJewelleryDetails = function (productType, productId) {
        this.router.navigate(['/home/', productType, productId]);
    };
    JewelleryThumbnailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.products);
        this.showEditDelBtn = false;
        this.currentRouteSubscription = this.auth.currentRoute.subscribe(function (routeUrl) {
            console.log(routeUrl);
            if (routeUrl == '/seller/vendor-profile') {
                _this.showEditDelBtn = true;
            }
            console.log(_this.showEditDelBtn);
        });
        this.auth.setCurrentRoute();
        this.userSubscription = this.auth.user.subscribe(function (user) {
            _this.showFavouriteBtn = user.userType == 'Customer';
        });
        this.products.map(function (product) {
            product.sellerName = _this.seller.getSellerById(product.sellerId).name;
        });
    };
    JewelleryThumbnailComponent.prototype.ngOnDestroy = function () {
        this.currentRouteSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    JewelleryThumbnailComponent.prototype.favouriteBtnStatus = function (product) {
        return this.customer.checkItemAlreadyInFavourite(product);
    };
    JewelleryThumbnailComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.openDialog({ title: 'Delete product', body: "Do you want to delete this " + product.type + "?" });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            result && _this.jewellery.deleteProduct(product);
        });
    };
    JewelleryThumbnailComponent.prototype.openDialog = function (dialogContent) {
        this.dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            data: dialogContent,
            width: '500px',
            height: 'auto',
        });
    };
    JewelleryThumbnailComponent.prototype.showEditForm = function (product) {
        return product == this.currentEditproduct;
    };
    JewelleryThumbnailComponent.prototype.applyNewPricesForVendor = function (newPrice) {
        this.products.forEach(function (product) {
            product.price += newPrice;
        });
    };
    JewelleryThumbnailComponent.prototype.closeEditMode = function (publishDone) {
        if (publishDone) {
            this.currentEditproduct = null;
        }
    };
    JewelleryThumbnailComponent.prototype.applyTranslate = function () {
        return { 'transform': 'translate(' + this.translate + '%)' };
    };
    JewelleryThumbnailComponent.prototype.editProduct = function (product) {
        this.seller.setCurrentlyEditProduct(product);
    };
    return JewelleryThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], JewelleryThumbnailComponent.prototype, "products", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], JewelleryThumbnailComponent.prototype, "translate", void 0);
JewelleryThumbnailComponent = __decorate([
    core_1.Component({
        selector: "jewellery-thumbnail",
        templateUrl: "./jewelery.thumbnail.template.html",
        styleUrls: ["./jewellery.thumbnail.styles.css"]
    }),
    __metadata("design:paramtypes", [seller_service_1.SellerService, jewellery_service_1.JewelleryService, auth_service_1.AuthService, router_1.Router, customer_service_1.CustomerService, material_1.MdDialog])
], JewelleryThumbnailComponent);
exports.JewelleryThumbnailComponent = JewelleryThumbnailComponent;
//# sourceMappingURL=jewelery.thumbnail.component.js.map