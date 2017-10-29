import {Injectable} from "@angular/core";
const TEMPSELLERS: User[] = [
  {
    id: 22222,
    name: 'seller 1',
    telephone1: 2587413598,
    telephone2: 2015845799,
    userType: 'Vendor',
    verified: true,
    address: 'ydffhjkhfsdjfhksdfsdf',
    email: 'asdasdasd.asdasd.com',
    area: 'عين شمس, القاهره',
    imageUrl: 'assets/images/log01.jpg'
  },
  {
    id: 33333,
    name: 'seller 2',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    userType: 'Vendor',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'عين شمس, القاهره',
    imageUrl: 'assets/images/log02.png'
  },
  {
    id: 11111,
    name: 'seller 3',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    verified: true,
    area: 'عين شمس, القاهره',
    imageUrl: 'assets/images/log06.png'
  },
  {
    id: 444,
    name: 'seller 4',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'عين شمس, القاهره',
    userType: 'Vendor',
    imageUrl: 'assets/images/log03.jpg'
  },
  {
    id: 555,
    name: 'seller 5',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    area: 'عين شمس, القاهره',
    imageUrl: 'assets/images/log04.jpg'
  },
  {
    id: 666,
    name: 'seller 6',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'عين شمس, القاهره',
    userType: 'Vendor',
    imageUrl: 'assets/images/log05.png'
  },
  {
    id: 33333,
    name: 'seller 7',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    userType: 'Vendor',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'عين شمس, القاهره',
    imageUrl: 'assets/images/log02.png'
  },
  {
    id: 11111,
    name: 'seller 8',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    verified: true,
    area: 'مصر الجديده, القاهره',
    imageUrl: 'assets/images/log06.png'
  },
  {
    id: 444,
    name: 'seller 9',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'assets/images/log03.jpg'
  },
  {
    id: 555,
    name: 'seller 10',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'assets/images/log04.jpg'
  },
  {
    id: 666,
    name: 'seller 11',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'assets/images/log05.png'
  },
  {
    id: 33333,
    name: 'seller 12',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    userType: 'Vendor',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'assets/images/log02.png'
  },
  {
    id: 11111,
    name: 'seller 13',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    verified: true,
    area: 'مصر الجديده, القاهره',
    imageUrl: 'assets/images/log06.png'
  },
  {
    id: 444,
    name: 'seller 14',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'assets/images/log03.jpg'
  },
  {
    id: 555,
    name: 'seller 15',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'assets/images/log04.jpg'
  },
  {
    id: 666,
    name: 'seller 16',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'assets/images/log05.png'
  },
  {
    id: 33333,
    name: 'seller 17',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    userType: 'Vendor',
    address: 'مصر الجديده, القاهره',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'assets/images/log02.png'
  },
  {
    id: 11111,
    name: 'seller 18',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    address: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    verified: true,
    area: 'مصر الجديده, القاهره',
    imageUrl: 'assets/images/log06.png'
  },
  {
    id: 444,
    name: 'seller 19',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'مصر الجديده, القاهره',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'assets/images/log03.jpg'
  },
  {
    id: 555,
    name: 'seller 20',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'assets/images/log04.jpg'
  },
  {
    id: 666,
    name: 'seller 21',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'aaaaaaa',
    userType: 'Vendor',
    imageUrl: 'assets/images/log05.png'
  }
];

import {User} from '../../index'
import {AuthService} from "./auth.service";
import {JewelleryService} from "./jewellery.service";
import {Subject} from "rxjs/Subject";
import {JeweleryProduct} from "../models/jewelleryProduct.model";
// import {Observable} from "rxjs";

@Injectable()

export class SellerService {
  sellerDetails: User;
  currentlyEditProduct = new Subject<JeweleryProduct>();

  constructor(private auth: AuthService, private jewellery: JewelleryService) {
    this.auth.user.subscribe((user) => {
      this.sellerDetails = <User>user;
    })
  }

  setCurrentlyEditProduct(product: JeweleryProduct) {
    console.log('set the currently edit product');
    this.currentlyEditProduct.next(product)
  }

  getSeller(): User[] {
    return TEMPSELLERS;
  }

  getSellerById(id: number): User {
    return (TEMPSELLERS.filter((seller) => {
      return seller.id === id;
    }))[0];
  }

  postNewProduct(productDetails: any) {
    productDetails.sellerId = this.sellerDetails.id;
    // productDetails.sellerName = this.sellerDetails.name;
    productDetails.area = this.sellerDetails.area;

    /*this call for prototyping purposes*/
    productDetails.imageUrl.map((x: any) => {
      x.url = '/assets/images/' + x.name;
    });
    console.log(productDetails);
    this.jewellery.addProductLocally(productDetails);
    return true;
  }

  postNewSellerDetails(details: any) {
    return true;
  }

  verifyPhone(phones: any) {
    return true;
  }

  verifyAddress(adress: string) {
    return true;
  }
}
