import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {
  JewelleryThumbnailComponent,
  SellerAddComponent,
  SellerProductsFilter,
  SinginSignUpComponent,
  JewelleryFavouriteBtn,
  SellerThumbnail,
  JewelleryFullOption,
  DialogComponent,
  SignUpComponent,
  SignUpDialog
} from '../index'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import {
  MdButtonModule,
  MdInputModule,
  MdIconModule,
  MdCardModule,
  // MdAutocompleteModule,  /*change by typeahead bootstrap*/
  // MdSelectModule,        /*change by dropdown bootstrap*/
  MdDialogModule,        /*change by personal custom dialog component*/
  // MdTabsModule,          /*change by tabs bootstrap*/
} from '@angular/material';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule,
    MdCardModule,
    // MdAutocompleteModule,
    // MdSelectModule,
    MdDialogModule,
    // MdTabsModule
  ],
  declarations: [
    JewelleryThumbnailComponent,
    JewelleryFullOption,
    SellerProductsFilter,
    SinginSignUpComponent,
    JewelleryFavouriteBtn,
    SellerThumbnail,
    SellerAddComponent,
    DialogComponent,
    SignUpComponent,
    SignUpDialog,
    AutocompleteComponent
  ],
  entryComponents: [
    SellerAddComponent,
    DialogComponent,
    SignUpDialog
  ],
  exports: [
    JewelleryThumbnailComponent,
    JewelleryFullOption,
    SinginSignUpComponent,
    JewelleryFavouriteBtn,
    SellerThumbnail,
    SellerAddComponent,
    DialogComponent,
    SignUpComponent,
    AutocompleteComponent,
    NgbModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule,
    MdCardModule,
    // MdAutocompleteModule,
    // MdSelectModule,
    MdDialogModule,
    // MdTabsModule
  ]
})

export class SharedModule {
}
