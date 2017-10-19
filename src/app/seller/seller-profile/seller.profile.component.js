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
var material_1 = require("@angular/material");
var seller_add_product_component_1 = require("../seller-add-product/seller.add.product.component");
var index_1 = require("../../shared/index");
var seller_service_1 = require("../../shared/services/seller.service");
var SellerProfileComponent = (function () {
    function SellerProfileComponent(seller, jewellery, auth, dialog) {
        this.seller = seller;
        this.jewellery = jewellery;
        this.auth = auth;
        this.dialog = dialog;
    }
    SellerProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.userSubscription = this.auth.user.subscribe(function (val) {
            console.log('have user');
            _this.user = val;
            _this.sellerProducts = _this.jewellery.getJewelleryBySellerId(val.id);
        });
        this.editDialogSubscription = this.seller.currentlyEditProduct.subscribe(function (value) {
            console.log('will open the dialog');
            _this.openDialog(value);
        });
        // this.toggleAddProductForm = true;
    };
    SellerProfileComponent.prototype.ngOnDestroy = function () {
        this.editDialogSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    SellerProfileComponent.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(seller_add_product_component_1.SellerAddComponent, {
            data: data,
            width: '500px',
            height: 'auto',
            disableClose: true
        });
    };
    return SellerProfileComponent;
}());
SellerProfileComponent = __decorate([
    core_1.Component({
        selector: 'seller-profile',
        templateUrl: './seller.profile.template.html',
        styleUrls: ['./seller.profile.styles.css']
    }),
    __metadata("design:paramtypes", [seller_service_1.SellerService, index_1.JewelleryService, index_1.AuthService, material_1.MdDialog])
], SellerProfileComponent);
exports.SellerProfileComponent = SellerProfileComponent;
//# sourceMappingURL=seller.profile.component.js.map