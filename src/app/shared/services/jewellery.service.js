"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tempJewellery = [
    {
        id: 1,
        productName: "ring 1",
        type: "ring",
        price: 500,
        sellerId: 22222,
        area: "aaa",
        goldDegree: "18K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 2,
        productName: "bracelet",
        type: "bracelet",
        price: 500,
        sellerId: 22222,
        area: "aaa",
        goldDegree: "24K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 3,
        productName: "011",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }, {
                name: '02.png',
                url: "/app/images/02.png"
            }, {
                name: '03.png',
                url: "/app/images/03.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 4,
        productName: "ring",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 5,
        productName: "ring",
        type: "ring",
        price: 600,
        sellerId: 11111,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 6,
        productName: "earring",
        type: "earring",
        goldDegree: "21K",
        price: 200,
        sellerId: 22222,
        area: "aaa",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 2,
        productName: "bracelet",
        type: "bracelet",
        price: 500,
        sellerId: 22222,
        area: "aaa",
        goldDegree: "24K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 3,
        productName: "011",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }, {
                name: '02.png',
                url: "/app/images/02.png"
            }, {
                name: '03.png',
                url: "/app/images/03.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 4,
        productName: "ring",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 5,
        productName: "ring",
        type: "ring",
        price: 600,
        sellerId: 11111,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 6,
        productName: "earring",
        type: "earring",
        goldDegree: "21K",
        price: 200,
        sellerId: 22222,
        area: "aaa",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 2,
        productName: "bracelet",
        type: "bracelet",
        price: 500,
        sellerId: 22222,
        area: "aaa",
        goldDegree: "24K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 3,
        productName: "011",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }, {
                name: '02.png',
                url: "/app/images/02.png"
            }, {
                name: '03.png',
                url: "/app/images/03.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 4,
        productName: "ring",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 5,
        productName: "ring",
        type: "ring",
        price: 600,
        sellerId: 11111,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 6,
        productName: "earring",
        type: "earring",
        goldDegree: "21K",
        price: 200,
        sellerId: 22222,
        area: "aaa",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 2,
        productName: "bracelet",
        type: "bracelet",
        price: 500,
        sellerId: 22222,
        area: "aaa",
        goldDegree: "24K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 3,
        productName: "011",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }, {
                name: '02.png',
                url: "/app/images/02.png"
            }, {
                name: '03.png',
                url: "/app/images/03.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 4,
        productName: "ring",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 5,
        productName: "ring",
        type: "ring",
        price: 600,
        sellerId: 11111,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 6,
        productName: "earring",
        type: "earring",
        goldDegree: "21K",
        price: 200,
        sellerId: 22222,
        area: "aaa",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 2,
        productName: "bracelet",
        type: "bracelet",
        price: 500,
        sellerId: 22222,
        area: "aaa",
        goldDegree: "24K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 3,
        productName: "011",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }, {
                name: '02.png',
                url: "/app/images/02.png"
            }, {
                name: '03.png',
                url: "/app/images/03.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 4,
        productName: "ring",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 5,
        productName: "ring",
        type: "ring",
        price: 600,
        sellerId: 11111,
        goldDegree: "21K",
        area: "aaa",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 6,
        productName: "earring",
        type: "earring",
        goldDegree: "21K",
        price: 200,
        sellerId: 22222,
        area: "aaa",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 3,
        productName: "011",
        type: "ring",
        price: 500,
        area: "aaa",
        sellerId: 33333,
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }, {
                name: '02.png',
                url: "/app/images/02.png"
            }, {
                name: '03.png',
                url: "/app/images/03.png"
            }],
        publishDate: "5/5/2017",
        description: 'Some stubid description goes here'
    },
    {
        id: 4,
        productName: "ring",
        type: "ring",
        price: 500,
        sellerId: 33333,
        area: "aaa",
        goldDegree: "21K",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 5,
        productName: "ring",
        type: "ring",
        price: 600,
        sellerId: 11111,
        goldDegree: "21K",
        area: "aaa",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    },
    {
        id: 6,
        productName: "earring",
        type: "earring",
        goldDegree: "21K",
        price: 200,
        sellerId: 22222,
        area: "aaa",
        imageUrl: [{
                name: '01.png',
                url: "/app/images/01.png"
            }],
        publishDate: "5/5/2017"
    }
];
var productTypes = [
    'ring',
    'bracelet',
    'earring',
    'necklace',
    'other'
];
var goldDegree = [
    '18K',
    '16K',
    '21K',
    '24K'
];
var areas = [
    'عين شمس, القاهره',
    'مصر الجديده, القاهره'
];
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var JewelleryService = (function () {
    function JewelleryService() {
        this.searchTerms = new Subject_1.Subject();
        this.searchTermsChanged = this.searchTerms.asObservable();
    }
    JewelleryService.prototype.getMostVisitedJewellery = function () {
        return tempJewellery;
    };
    JewelleryService.prototype.getHotDeals = function () {
        return tempJewellery;
    };
    JewelleryService.prototype.getJewelleryById = function (id) {
        var choosedJewellery;
        tempJewellery.map(function (item) {
            item.id === id ? choosedJewellery = item : true;
        });
        return choosedJewellery;
    };
    JewelleryService.prototype.getJewelleryByType = function (type) {
        return tempJewellery.filter(function (item) {
            return item.type === type;
        });
    };
    JewelleryService.prototype.setSearchTerms = function (newSearchTerms) {
        this.searchTerms.next(newSearchTerms);
    };
    JewelleryService.prototype.getJewelleryBySellerId = function (id) {
        return tempJewellery.filter(function (item) {
            return item.sellerId === id;
        });
    };
    JewelleryService.prototype.getCountJewelleryBySellerIdAndJewelleryType = function (id, type) {
        return tempJewellery.filter(function (jewellery) {
            return jewellery.sellerId == id && jewellery.type == type;
        }).length;
    };
    JewelleryService.prototype.getCountJewelleryByType = function (products) {
        var _this = this;
        var productsCountByType = [];
        /*this is temproraly call and will be removed later after implementing back end*/
        this.getProductTypes();
        /*-------------------------------------------------*/
        products.map(function (product) {
            for (var _i = 0, _a = _this.productsTypes; _i < _a.length; _i++) {
                var type = _a[_i];
                if (product.type == type) {
                    if (productsCountByType.length) {
                        for (var i = 0, l = productsCountByType.length; i < l; i++) {
                            if (productsCountByType[i].type == product.type) {
                                productsCountByType[i].count++;
                                break;
                            }
                            else if (i == productsCountByType.length - 1) {
                                productsCountByType.push({
                                    type: product.type,
                                    count: 1
                                });
                            }
                        }
                    }
                    else {
                        productsCountByType.push({
                            type: product.type,
                            count: 1
                        });
                    }
                    break;
                }
            }
        });
        // console.log(productsCountByType);
        return productsCountByType;
    };
    JewelleryService.prototype.applySearchTerms = function (searchTerms) {
        var searchTerm = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            searchTerm[_i - 1] = arguments[_i];
        }
        var searchResult = [];
        console.log(searchTerm);
        if (searchTerm.length === 1) {
            tempJewellery.map(function (item) {
                if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]])) {
                    searchResult.push(item);
                }
            });
        }
        else if (searchTerm.length === 2) {
            tempJewellery.map(function (item) {
                if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]]) && item["" + searchTerm[1]].includes(searchTerms["" + searchTerm[1]])) {
                    searchResult.push(item);
                }
            });
        }
        else if (searchTerm.length === 3) {
            tempJewellery.map(function (item) {
                if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]]) && item["" + searchTerm[1]].includes(searchTerms["" + searchTerm[1]]) && item["" + searchTerm[2]].includes(searchTerms["" + searchTerm[2]])) {
                    searchResult.push(item);
                }
            });
        }
        return searchResult;
    };
    JewelleryService.prototype.searchJewellery = function (searchTerms) {
        console.log(searchTerms);
        var searchTermTitles = [];
        for (var property in searchTerms) {
            if (searchTerms.hasOwnProperty(property)) {
                searchTermTitles.push(property);
            }
        }
        return this.applySearchTerms.apply(this, [searchTerms].concat(searchTermTitles));
    };
    JewelleryService.prototype.getProductTypes = function () {
        this.productsTypes = productTypes;
        return productTypes;
    };
    JewelleryService.prototype.getGoldDegree = function () {
        return goldDegree;
    };
    /*currently simulate back-end but later will integrate a real back-end*/
    JewelleryService.prototype.deleteProduct = function (product) {
        tempJewellery.splice(tempJewellery.indexOf(product), 1);
        return true;
    };
    /*this function for prototype purpose*/
    JewelleryService.prototype.addProductLocally = function (product) {
        tempJewellery.map(function (x, i) {
            if (x.id == product.id) {
                tempJewellery[i] = product;
            }
        });
        if (!~tempJewellery.indexOf(product)) {
            tempJewellery.push(product);
        }
        console.log(tempJewellery);
    };
    JewelleryService.prototype.applyFilterTerms = function (terms, fullProductsList) {
        console.log(terms);
        if (terms.type !== 'All' || terms.goldDegree !== 'All') {
            return (fullProductsList.filter(function (product) {
                if (terms.type !== 'All' && terms.goldDegree !== 'All') {
                    return product.type == terms.type && product.goldDegree == terms.goldDegree;
                }
                else if (terms.type == 'All' || terms.goldDegree == 'All') {
                    return product.type == terms.type || product.goldDegree == terms.goldDegree;
                }
            }));
        }
        else {
            return fullProductsList.slice();
        }
    };
    JewelleryService.prototype.sortProducts = function (sortTerm, productsList) {
        productsList.sort(function (a, b) {
            if (sortTerm == 'Highest first') {
                return b.price - a.price;
            }
            else if (sortTerm == 'Lowest first') {
                return a.price - b.price;
            }
        });
    };
    JewelleryService.prototype.getAreas = function () {
        return areas;
    };
    return JewelleryService;
}());
JewelleryService = __decorate([
    core_1.Injectable()
], JewelleryService);
exports.JewelleryService = JewelleryService;
//# sourceMappingURL=jewellery.service.js.map