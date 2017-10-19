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
var index_1 = require("../../shared/index");
// import {Utility} from "../../shared/services/utility.service";
var jewellery_service_1 = require("../../shared/services/jewellery.service");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/map");
var auth_service_1 = require("../../shared/services/auth.service");
var SellersListComponent = (function () {
    function SellersListComponent(seller, jewellery, auth) {
        this.seller = seller;
        this.jewellery = jewellery;
        this.auth = auth;
    }
    SellersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.showVerifiedVendorAlertSubscribetion = this.auth.verifiedVendorsAlertState.subscribe(function (val) {
            _this.showVerifiedVendorAlert = val;
        });
        this.areas = this.jewellery.getAreas();
        this.stateCtrl = new forms_1.FormControl();
        this.filterSellersForm = new forms_1.FormGroup({
            stateCtrl: this.stateCtrl
        });
        this.filteredAreas = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterAreas(name); });
        this.sellerList = this.seller.getSeller();
        this.page = 1;
        this.pageSize = 15;
        this.viewList = this.sellerList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
        this.paginationLength = this.sellerList.length;
    };
    SellersListComponent.prototype.ngOnDestroy = function () {
        this.showVerifiedVendorAlertSubscribetion.unsubscribe();
    };
    SellersListComponent.prototype.filterAreas = function (val) {
        console.log(val);
        if (val) {
            return this.areas.filter(function (s) { return new RegExp("^" + val, 'gi').test(s); });
        }
        else {
            this.viewList = this.sellerList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
            this.paginationLength = this.sellerList.length;
            this.filteredList = [];
            this.page = 1;
            return this.areas;
        }
    };
    SellersListComponent.prototype.applyPagination = function (pageNumber) {
        if (this.filteredList.length) {
            this.viewList = this.filteredList.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
        }
        else {
            this.viewList = this.sellerList.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
        }
        console.log(pageNumber);
    };
    SellersListComponent.prototype.filterSellers = function (area) {
        this.page = 1;
        this.filteredList = this.sellerList.filter(function (seller) {
            return seller.area.includes(area);
        });
        this.paginationLength = this.filteredList.length;
        this.viewList = this.filteredList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
    };
    SellersListComponent.prototype.dismissVerifiedVendors = function () {
        this.auth.setVerifiedVendorsAlertState(false);
    };
    return SellersListComponent;
}());
SellersListComponent = __decorate([
    core_1.Component({
        selector: "sllers-list",
        templateUrl: 'app/seller/seller-list/seller.list.template.html',
        styleUrls: ['app/seller/seller-list/seller.list.styles.css']
    }),
    __metadata("design:paramtypes", [index_1.SellerService, jewellery_service_1.JewelleryService, auth_service_1.AuthService])
], SellersListComponent);
exports.SellersListComponent = SellersListComponent;
//# sourceMappingURL=sellers.list.component.js.map