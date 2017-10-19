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
var index_1 = require("./../../shared/index");
var JewellerySearchResultsComponent = (function () {
    function JewellerySearchResultsComponent(route, jewellery) {
        this.route = route;
        this.jewellery = jewellery;
    }
    JewellerySearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.route.params.forEach(function (params) {
            console.log(params);
            _this.searchTerms = JSON.parse(params["terms"]);
            console.log(_this.searchTerms);
            _this.jewellery.setSearchTerms(_this.searchTerms);
            _this.searchResult = _this.jewellery.searchJewellery(_this.searchTerms);
        });
    };
    return JewellerySearchResultsComponent;
}());
JewellerySearchResultsComponent = __decorate([
    core_1.Component({
        selector: "jewellery-search-result",
        templateUrl: "./jewellery.search.results.template.html",
        styleUrls: ["./jewellery.search.results.styles.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, index_1.JewelleryService])
], JewellerySearchResultsComponent);
exports.JewellerySearchResultsComponent = JewellerySearchResultsComponent;
//# sourceMappingURL=jewellery.search.results.component.js.map