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
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var RegisteredIcons = (function () {
    function RegisteredIcons(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
    }
    RegisteredIcons.prototype.addRegisteredSvgIcons = function () {
        this.iconRegistry.addSvgIcon('arrow', this.sanitizer.bypassSecurityTrustResourceUrl('app/assets/images/arrow.svg'));
        this.iconRegistry.addSvgIcon('check', this.sanitizer.bypassSecurityTrustResourceUrl('app/assets/images/check.svg'));
        this.iconRegistry.addSvgIcon('info', this.sanitizer.bypassSecurityTrustResourceUrl('app/assets/images/info-icon.svg'));
    };
    return RegisteredIcons;
}());
RegisteredIcons = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdIconRegistry, platform_browser_1.DomSanitizer])
], RegisteredIcons);
exports.RegisteredIcons = RegisteredIcons;
//# sourceMappingURL=registered.icons.service.js.map