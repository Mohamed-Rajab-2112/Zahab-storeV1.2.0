import {Routes} from "@angular/router";

import {
  // SellersListComponent,
  SellerDetailsComponent,
  SellerProfileComponent
} from "./index";

import {
  VendorProfileActivator,
  SellerDetailsActivator
} from '../shared/index'

export const sellerRoutes: Routes = [
  {path: "vendor-profile", component: SellerProfileComponent, canActivate: [VendorProfileActivator]},
  {path: "sellers-list/:id", component: SellerDetailsComponent, canActivate: [SellerDetailsActivator]},
  {path: '', redirectTo: "/home", pathMatch: "prefix"}
];
