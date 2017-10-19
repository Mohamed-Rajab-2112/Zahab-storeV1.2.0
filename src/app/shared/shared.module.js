"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var index_1 = require("../index");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var material_1 = require("@angular/material");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng_bootstrap_1.NgbModule,
            material_1.MdButtonModule,
            material_1.MdCheckboxModule,
            material_1.MdInputModule,
            material_1.MdIconModule,
            material_1.MdTooltipModule,
            material_1.MdCardModule,
            material_1.MdAutocompleteModule,
            material_1.MdSelectModule,
            material_1.MdDialogModule,
            material_1.MdTabsModule,
            material_1.MdMenuModule
        ],
        declarations: [
            index_1.JewelleryThumbnailComponent,
            index_1.JewelleryFullOption,
            index_1.SellerProductsFilter,
            index_1.SinginSignUpComponent,
            index_1.JewelleryFavouriteBtn,
            index_1.SellerThumbnail,
            index_1.SellerAddComponent,
            index_1.DialogComponent,
            index_1.SignUpComponent,
            index_1.SignUpDialog
        ],
        entryComponents: [
            index_1.SellerAddComponent,
            index_1.DialogComponent,
            index_1.SignUpDialog
        ],
        exports: [
            index_1.JewelleryThumbnailComponent,
            index_1.JewelleryFullOption,
            index_1.SinginSignUpComponent,
            index_1.JewelleryFavouriteBtn,
            index_1.SellerThumbnail,
            index_1.SellerAddComponent,
            index_1.DialogComponent,
            index_1.SignUpComponent,
            ng_bootstrap_1.NgbModule,
            material_1.MdButtonModule,
            material_1.MdCheckboxModule,
            material_1.MdInputModule,
            material_1.MdIconModule,
            material_1.MdTooltipModule,
            material_1.MdCardModule,
            material_1.MdAutocompleteModule,
            material_1.MdSelectModule,
            material_1.MdDialogModule,
            material_1.MdTabsModule,
            material_1.MdMenuModule
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map