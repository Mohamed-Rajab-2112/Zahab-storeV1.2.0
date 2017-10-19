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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../shared/index");
var seller_service_1 = require("../../shared/services/seller.service");
// import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
// const numberOfImagesToUpload = 3;
var SellerAddComponent = (function () {
    function SellerAddComponent(jewellery, seller, sanitizer, dialogRef, product) {
        this.jewellery = jewellery;
        this.seller = seller;
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.product = product;
        this.newPrice = new core_1.EventEmitter();
        this.imagesFilesList = [];
    }
    SellerAddComponent.prototype.ngOnInit = function () {
        console.log(this.product);
        this.productTypes = this.jewellery.getProductTypes();
        this.goldDegrees = this.jewellery.getGoldDegree();
        console.log(this.productTypes);
        console.log(this.goldDegrees);
        this.oldPrice = this.product.price || '';
        this.productOldValue = JSON.stringify(this.product);
        console.log(this.productOldValue);
        this.product = JSON.parse(this.productOldValue);
        console.log(this.product);
        this.imageUrlValid = false;
        if (this.product.imageUrl) {
            this.imagesFilesList = this.product.imageUrl;
            this.editMode = true;
        }
        // this.product.type = this.product.type || '-Choose Product Type-';
        // this.product.goldDegree = this.product.goldDegree;
    };
    SellerAddComponent.prototype.deleteImage = function (image) {
        this.imagesFilesList.splice(this.imagesFilesList.indexOf(image), 1);
        document.getElementById('imagesInput').value = "";
    };
    SellerAddComponent.prototype.publishProduct = function (productDetails) {
        if ((this.oldPrice && productDetails.price != this.oldPrice) && confirm('Do you want to change all other products prices by the same amount ?')) {
            this.newPrice.emit(productDetails.price - this.oldPrice);
        }
        productDetails.imageUrl = this.imagesFilesList;
        this.product.id && (productDetails.id = this.product.id);
        this.imageUrlValid = !!productDetails.imageUrl.length;
        if (this.imageUrlValid) {
            productDetails.id = productDetails.id || this.seller.sellerDetails.id + Date.now();
            this.seller.postNewProduct(productDetails);
            this.dialogRef.close();
        }
        console.log(productDetails);
    };
    SellerAddComponent.prototype.getImageUrl = function (value) {
        var _selectedImages = value.target.files;
        console.log(_selectedImages);
        for (var image in _selectedImages) {
            if (_selectedImages.hasOwnProperty(image)) {
                _selectedImages["" + image].url = URL.createObjectURL(_selectedImages["" + image]);
                _selectedImages["" + image].url = this.sanitizer.bypassSecurityTrustResourceUrl(_selectedImages["" + image].url);
                this.imagesFilesList.push({
                    name: _selectedImages["" + image].name,
                    url: _selectedImages["" + image].url
                });
            }
            this.imageUrlValid = !!this.imagesFilesList.length;
        }
    };
    return SellerAddComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SellerAddComponent.prototype, "newPrice", void 0);
SellerAddComponent = __decorate([
    core_1.Component({
        selector: 'add-product',
        templateUrl: './seller.add.product.template.html',
        styleUrls: ['./seller.add.product.styles.css']
    }),
    __param(4, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [index_1.JewelleryService, seller_service_1.SellerService, platform_browser_1.DomSanitizer, material_1.MdDialogRef, Object])
], SellerAddComponent);
exports.SellerAddComponent = SellerAddComponent;
//# sourceMappingURL=seller.add.product.component.js.map