import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {SellerService} from "./seller.service";

@Injectable()
export class SellerDetailsActivator implements CanActivate {
  constructor(private router: Router, private seller: SellerService) {
  };

  canActivate(route: ActivatedRouteSnapshot) {
    let youCanRoute: boolean = false;
    youCanRoute = !!this.seller.getSellerById(Number(route.params['id']));

    if (!youCanRoute) {
      this.router.navigate(['/home'])
    }

    return youCanRoute;
  }
}
