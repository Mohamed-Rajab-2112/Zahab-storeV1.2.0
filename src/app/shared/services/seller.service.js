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
var TEMPSELLERS = [
    {
        id: 22222,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        userType: 'Vendor',
        verified: true,
        address: 'ydffhjkhfsdjfhksdfsdf',
        email: 'asdasdasd.asdasd.com',
        area: 'عين شمس, القاهره',
        imageUrl: 'app/images/log01.jpg'
    },
    {
        id: 33333,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        email: 'asdasdasd.asdasd.com',
        userType: 'Vendor',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'عين شمس, القاهره',
        imageUrl: 'app/images/log02.png'
    },
    {
        id: 11111,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        userType: 'Vendor',
        verified: true,
        area: 'عين شمس, القاهره',
        imageUrl: 'app/images/log06.png'
    },
    {
        id: 444,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'عين شمس, القاهره',
        userType: 'Vendor',
        imageUrl: 'app/images/log03.jpg'
    },
    {
        id: 555,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        userType: 'Vendor',
        area: 'عين شمس, القاهره',
        imageUrl: 'app/images/log04.jpg'
    },
    {
        id: 666,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'عين شمس, القاهره',
        userType: 'Vendor',
        imageUrl: 'app/images/log05.png'
    },
    {
        id: 33333,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        email: 'asdasdasd.asdasd.com',
        userType: 'Vendor',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'عين شمس, القاهره',
        imageUrl: 'app/images/log02.png'
    },
    {
        id: 11111,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        userType: 'Vendor',
        verified: true,
        area: 'مصر الجديده, القاهره',
        imageUrl: 'app/images/log06.png'
    },
    {
        id: 444,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'مصر الجديده, القاهره',
        userType: 'Vendor',
        imageUrl: 'app/images/log03.jpg'
    },
    {
        id: 555,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        userType: 'Vendor',
        area: 'مصر الجديده, القاهره',
        imageUrl: 'app/images/log04.jpg'
    },
    {
        id: 666,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'مصر الجديده, القاهره',
        userType: 'Vendor',
        imageUrl: 'app/images/log05.png'
    },
    {
        id: 33333,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        email: 'asdasdasd.asdasd.com',
        userType: 'Vendor',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'مصر الجديده, القاهره',
        imageUrl: 'app/images/log02.png'
    },
    {
        id: 11111,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        userType: 'Vendor',
        verified: true,
        area: 'مصر الجديده, القاهره',
        imageUrl: 'app/images/log06.png'
    },
    {
        id: 444,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'مصر الجديده, القاهره',
        userType: 'Vendor',
        imageUrl: 'app/images/log03.jpg'
    },
    {
        id: 555,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        userType: 'Vendor',
        area: 'مصر الجديده, القاهره',
        imageUrl: 'app/images/log04.jpg'
    },
    {
        id: 666,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'مصر الجديده, القاهره',
        userType: 'Vendor',
        imageUrl: 'app/images/log05.png'
    },
    {
        id: 33333,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        email: 'asdasdasd.asdasd.com',
        userType: 'Vendor',
        address: 'مصر الجديده, القاهره',
        area: 'مصر الجديده, القاهره',
        imageUrl: 'app/images/log02.png'
    },
    {
        id: 11111,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        email: 'asdasdasd.asdasd.com',
        address: 'مصر الجديده, القاهره',
        userType: 'Vendor',
        verified: true,
        area: 'مصر الجديده, القاهره',
        imageUrl: 'app/images/log06.png'
    },
    {
        id: 444,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'مصر الجديده, القاهره',
        area: 'مصر الجديده, القاهره',
        userType: 'Vendor',
        imageUrl: 'app/images/log03.jpg'
    },
    {
        id: 555,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'مصر الجديده, القاهره',
        userType: 'Vendor',
        area: 'مصر الجديده, القاهره',
        imageUrl: 'app/images/log04.jpg'
    },
    {
        id: 666,
        name: 'trtryrtyrty',
        telephone1: 2587413598,
        telephone2: 2015845799,
        email: 'asdasdasd.asdasd.com',
        address: 'ydffhjkhfsdjfhksdfsdf',
        area: 'aaaaaaa',
        userType: 'Vendor',
        imageUrl: 'app/images/log05.png'
    }
];
var auth_service_1 = require("./auth.service");
var jewellery_service_1 = require("./jewellery.service");
var Subject_1 = require("rxjs/Subject");
// import {Observable} from "rxjs";
var SellerService = (function () {
    function SellerService(auth, jewellery) {
        var _this = this;
        this.auth = auth;
        this.jewellery = jewellery;
        this.currentlyEditProduct = new Subject_1.Subject();
        this.auth.user.subscribe(function (user) {
            _this.sellerDetails = user;
        });
    }
    SellerService.prototype.setCurrentlyEditProduct = function (product) {
        console.log('set the currently edit product');
        this.currentlyEditProduct.next(product);
    };
    SellerService.prototype.getSeller = function () {
        return TEMPSELLERS;
    };
    SellerService.prototype.getSellerById = function (id) {
        return (TEMPSELLERS.filter(function (seller) {
            return seller.id === id;
        }))[0];
    };
    SellerService.prototype.postNewProduct = function (productDetails) {
        productDetails.sellerId = this.sellerDetails.id;
        // productDetails.sellerName = this.sellerDetails.name;
        productDetails.area = this.sellerDetails.area;
        /*this call for prototyping purposes*/
        productDetails.imageUrl.map(function (x) {
            x.url = '/app/images/' + x.name;
        });
        console.log(productDetails);
        this.jewellery.addProductLocally(productDetails);
        return true;
    };
    SellerService.prototype.postNewSellerDetails = function (details) {
        return true;
    };
    SellerService.prototype.verifyPhone = function (phones) {
        return true;
    };
    SellerService.prototype.verifyAddress = function (adress) {
        return true;
    };
    return SellerService;
}());
SellerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, jewellery_service_1.JewelleryService])
], SellerService);
exports.SellerService = SellerService;
//# sourceMappingURL=seller.service.js.map