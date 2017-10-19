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
var jewellery_service_1 = require("../services/jewellery.service");
var JewelleryFullOption = (function () {
    function JewelleryFullOption(jewellery) {
        this.jewellery = jewellery;
    }
    JewelleryFullOption.prototype.ngOnInit = function () {
        this.pageSize = 10;
        this.page = 1;
        this.productsFiltered = this.products.slice();
        this.viewList = this.products.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
    };
    JewelleryFullOption.prototype.ngOnChanges = function () {
        this.productsFiltered = this.products.slice();
        this.viewList = this.products.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
    };
    JewelleryFullOption.prototype.applyPagination = function (pageNumber) {
        this.viewList = this.productsFiltered.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
    };
    JewelleryFullOption.prototype.applyFilterTerms = function (terms) {
        this.page = 1;
        this.productsFiltered = this.jewellery.applyFilterTerms(terms, this.products);
        this.viewList = this.productsFiltered.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
    };
    JewelleryFullOption.prototype.sortProducts = function (sortTerm) {
        this.jewellery.sortProducts(sortTerm, this.viewList);
    };
    return JewelleryFullOption;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], JewelleryFullOption.prototype, "products", void 0);
JewelleryFullOption = __decorate([
    core_1.Component({
        selector: 'jewellery-full-option',
        templateUrl: './jewellery.full.option.template.html',
        styleUrls: ['./jewellery.full.option.styles.css']
    }),
    __metadata("design:paramtypes", [jewellery_service_1.JewelleryService])
], JewelleryFullOption);
exports.JewelleryFullOption = JewelleryFullOption;
//# sourceMappingURL=jewellery.full.option.component.js.map