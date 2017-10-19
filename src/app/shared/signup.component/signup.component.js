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
var auth_service_1 = require("../services/auth.service");
var forms_1 = require("@angular/forms");
var jewellery_service_1 = require("../services/jewellery.service");
var SignUpComponent = (function () {
    function SignUpComponent(auth, jewellery) {
        this.auth = auth;
        this.jewellery = jewellery;
        this.signInToggleOutPut = new core_1.EventEmitter;
        this.closeDialog = new core_1.EventEmitter;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = new forms_1.FormControl('', forms_1.Validators.required);
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.area = new forms_1.FormControl('', forms_1.Validators.required);
        this.phoneNumber = new forms_1.FormControl('', forms_1.Validators.required);
        /*dummy value for area and number of customer to skip signup for validation*/
        if (this.userType === 'Customer') {
            this.area = new forms_1.FormControl('dummyValue', forms_1.Validators.required);
            this.phoneNumber = new forms_1.FormControl(111, forms_1.Validators.required);
        }
        this.password = new forms_1.FormControl('', forms_1.Validators.required);
        this.password2 = new forms_1.FormControl('', forms_1.Validators.required);
        /*assign form controls to the form group*/
        this.signupForm = new forms_1.FormGroup({
            userName: this.userName,
            email: this.email,
            area: this.area,
            phoneNumber: this.phoneNumber,
            password: this.password,
            password2: this.password2,
        });
        /*filter autocomplete values*/
        this.filteredAreas = this.area.valueChanges.startWith(null).map(function (val) { return val ? _this.filterAreas(val) : _this.areas.slice(); });
        this.areas = this.jewellery.getAreas();
    };
    SignUpComponent.prototype.filterAreas = function (val) {
        var filteredAreas = this.areas.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
        this.showNoAreaFound = !filteredAreas.length;
        return filteredAreas;
    };
    SignUpComponent.prototype.signUp = function (values) {
        values.signUpDate = new Date(Date.now()).toISOString();
        values.userType = this.userType;
        if (this.userType === 'Customer') {
            this.signInToggleOutPut.emit();
            delete values.area;
            delete values.phoneNumber;
        }
        delete values.password2;
        this.auth.signUp(values);
    };
    SignUpComponent.prototype.toggleSignInFlag = function () {
        this.signInToggleOutPut.emit();
    };
    SignUpComponent.prototype.closeInDialogCase = function () {
        this.closeDialog.emit();
    };
    return SignUpComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SignUpComponent.prototype, "signInToggleOutPut", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SignUpComponent.prototype, "closeDialog", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SignUpComponent.prototype, "userType", void 0);
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'signUp',
        templateUrl: './signup.template.html',
        styleUrls: ['./signup.styles.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, jewellery_service_1.JewelleryService])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map