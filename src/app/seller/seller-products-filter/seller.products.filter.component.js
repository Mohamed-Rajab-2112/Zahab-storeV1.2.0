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
var jewellery_service_1 = require("../../shared/services/jewellery.service");
var SellerProductsFilter = (function () {
    function SellerProductsFilter(jewellery) {
        this.jewellery = jewellery;
        this.filterTerms = new core_1.EventEmitter;
        this.sortTerm = new core_1.EventEmitter;
    }
    SellerProductsFilter.prototype.ngOnInit = function () {
        this.goldDegrees = this.jewellery.getGoldDegree();
        this.selectedDegree = 'All';
        this.typesAndCounts = this.jewellery.getCountJewelleryByType(this.products);
        this.priceSort = 'Lowest first';
        this.typesAndCounts.length > 1 ? this.assignType('All') : this.typesAndCounts.length && this.assignType(this.typesAndCounts[0].type);
        this.sortByPrice();
    };
    SellerProductsFilter.prototype.ngOnChanges = function () {
        this.typesAndCounts = this.jewellery.getCountJewelleryByType(this.products);
        if (this.typesAndCounts.length > 1) {
            this.assignType('All');
        }
        else {
            this.typesAndCounts.length && this.assignType(this.typesAndCounts[0].type);
        }
    };
    SellerProductsFilter.prototype.filterByTerms = function () {
        var terms = {
            type: this.type || 'All',
            goldDegree: this.selectedDegree
        };
        this.filterTerms.emit(terms);
        this.sortByPrice();
    };
    SellerProductsFilter.prototype.assignType = function (type) {
        this.type = type;
        this.filterByTerms();
    };
    SellerProductsFilter.prototype.applySelectedBtnClass = function (type) {
        if (this.type == type) {
            return 'selected-button';
        }
    };
    SellerProductsFilter.prototype.sortByPrice = function () {
        this.sortTerm.emit(this.priceSort);
    };
    return SellerProductsFilter;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SellerProductsFilter.prototype, "filterTerms", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SellerProductsFilter.prototype, "sortTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SellerProductsFilter.prototype, "products", void 0);
SellerProductsFilter = __decorate([
    core_1.Component({
        selector: 'products-filter',
        templateUrl: 'app/seller/seller-products-filter/seller.products.filter.template.html',
        styleUrls: ['app/seller/seller-products-filter/seller.products.filter.styles.css']
    }),
    __metadata("design:paramtypes", [jewellery_service_1.JewelleryService])
], SellerProductsFilter);
exports.SellerProductsFilter = SellerProductsFilter;
//# sourceMappingURL=seller.products.filter.component.js.map