import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {JewelleryService} from "./jewellery.service";
import {SellerService} from "./seller.service";
@Injectable()

export class JewelleryDetailsActivator implements CanActivate {
  constructor(private jewellery: JewelleryService, private seller: SellerService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    console.log(route);
    let youCanRoute: boolean = false;
    youCanRoute = !!this.jewellery.getJewelleryById(Number(route.params['id']));
    console.log(youCanRoute);
    if (!youCanRoute) {
      this.router.navigate(['/home'])
    }
    return youCanRoute;
  }
}
