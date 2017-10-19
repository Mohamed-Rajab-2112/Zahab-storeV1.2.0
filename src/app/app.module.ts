import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import {
  JewelleryStoreAppComponent,
  JewelleryHomeComponent,
  JewelleryListComponent,
  JewellerySearchResultsComponent,
  JewelleryDetailsComponent,
  JewellerySearchForm,
  appRoutes,
}  from "./jewellery/index";

import {
  JewelleryService,
  NavComponent,
  FooterComponent,
  SharedModule,
  CustomerService,
  SellerService,
  AuthService,
  CustomerProfileActivator,
  VendorProfileActivator,
  JewelleryDetailsActivator,
  DefaultRedirectActivator,
  JewelleryListActivator,
  RegisteredIcons,
  Utility,
} from "./shared/index";

import {
  SellersListComponent
} from './index'
import {SellerDetailsActivator} from "./shared/services/seller.details.activator.guard";

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule
  ],
  declarations: [
    JewelleryStoreAppComponent,
    JewelleryHomeComponent,
    JewelleryListComponent,
    JewellerySearchResultsComponent,
    JewelleryDetailsComponent,
    SellersListComponent,
    NavComponent,
    FooterComponent,
    JewellerySearchForm
  ],
  bootstrap: [JewelleryStoreAppComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CustomerService,
    JewelleryService,
    SellerService,
    AuthService,
    CustomerProfileActivator,
    VendorProfileActivator,
    JewelleryDetailsActivator,
    SellerDetailsActivator,
    DefaultRedirectActivator,
    JewelleryListActivator,
    RegisteredIcons,
    Utility
  ]
})

export class AppModule {
}
