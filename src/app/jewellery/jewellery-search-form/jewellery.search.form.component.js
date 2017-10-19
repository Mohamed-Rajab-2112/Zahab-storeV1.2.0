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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var jewellery_service_1 = require("../../shared/services/jewellery.service");
var JewellerySearchForm = (function () {
    function JewellerySearchForm(router, jewellery) {
        this.router = router;
        this.jewellery = jewellery;
    }
    JewellerySearchForm.prototype.ngOnInit = function () {
        var _this = this;
        this.types = this.jewellery.getProductTypes();
        this.areas = this.jewellery.getAreas();
        this.productNameControl = new forms_1.FormControl(this.productName, [forms_1.Validators.required]);
        this.areaControl = new forms_1.FormControl(this.area, [forms_1.Validators.required]);
        this.searchForm = new forms_1.FormGroup({
            productName: this.productNameControl,
            area: this.areaControl
        });
        this.filteredTypes = this.productNameControl.valueChanges.startWith(null).map(function (val) { return val ? _this.filter(val, _this.types) : _this.types.slice(); });
        this.filteredAreas = this.areaControl.valueChanges.startWith(null).map(function (val) { return val ? _this.filter(val, _this.areas) : _this.areas.slice(); });
        this.searchTermsSubscription = this.jewellery.searchTermsChanged.subscribe(function (value) {
            _this.productName = value["productName"] === "undefined" ? "" : value["productName"];
            _this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
            _this.area = value["area"] === "undefined" ? "" : value["area"];
        });
        this.toggleSearchFormClass = ['hidden-form'];
        this.toggleBackdrop = true;
    };
    JewellerySearchForm.prototype.ngOnDestroy = function () {
        this.searchTermsSubscription.unsubscribe();
    };
    JewellerySearchForm.prototype.filter = function (val, data) {
        return data.filter(function (type) { return new RegExp("^" + val, 'gi').test(type); });
    };
    JewellerySearchForm.prototype.searchProductAndarea = function (values) {
        console.log(values);
        for (var property in values) {
            console.log(values["" + property]);
            if (values.hasOwnProperty(property) && values["" + property] == null) {
                delete values["" + property];
            }
        }
        this.router.navigate(["/search/" + JSON.stringify(values)]);
        this.toggleSearchForm();
    };
    JewellerySearchForm.prototype.toggleSearchForm = function () {
        this.toggleSearchFormClass = String(this.toggleSearchFormClass) === String(['hidden-form']) ? ['shown-form'] : ['hidden-form'];
        this.toggleBackdrop = !this.toggleBackdrop;
    };
    return JewellerySearchForm;
}());
JewellerySearchForm = __decorate([
    core_1.Component({
        selector: 'jewellery-search-form',
        templateUrl: './jewellery.search.form.template.html',
        styleUrls: ['./jewellery.search.form.styles.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, jewellery_service_1.JewelleryService])
], JewellerySearchForm);
exports.JewellerySearchForm = JewellerySearchForm;
//# sourceMappingURL=jewellery.search.form.component.js.map