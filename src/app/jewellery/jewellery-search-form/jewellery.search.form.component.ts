import {Component, OnInit, OnDestroy} from "@angular/core";
// import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {JewelleryService} from "../../shared/services/jewellery.service";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'jewellery-search-form',
  templateUrl: './jewellery.search.form.template.html',
  styleUrls: ['./jewellery.search.form.styles.css']
})

export class JewellerySearchForm implements OnInit, OnDestroy {

  productName: string;
  sellerName: string;
  area: string;
  areas: string[];
  types: string[];
  selectedTypes: string[];
  searchTermsSubscription: any;
  filteredTypes: Observable<string[]>;
  filteredAreas: Observable<string[]>;
  // searchForm: FormGroup;
  // productNameControl: FormControl;
  // areaControl: FormControl;
  toggleSearchFormClass: string[];
  toggleBackdrop: boolean;
  toggleTypes: boolean;
  toggleDisableTypes: boolean;
  defaultSelectedType: string = 'All';

  constructor(private router: Router, private jewellery: JewelleryService) {
  }

  ngOnInit() {
    this.types = this.jewellery.getProductTypes();
    this.areas = this.jewellery.getAreas();

    this.toggleTypes = false;
    this.toggleDisableTypes = false;
    this.selectedTypes = [this.defaultSelectedType];
    console.log(this.selectedTypes);
    // console.log(this.selectedTypes.includes(this.defaultSelectedType));
    // this.productNameControl = new FormControl(this.productName, [Validators.required]);
    // this.areaControl = new FormControl(this.area, [Validators.required]);

    // this.searchForm = new FormGroup({
    //   productName: this.productNameControl,
    //   // area: this.areaControl
    // });

    // this.filteredTypes = this.productNameControl.valueChanges.startWith(null).map((val: string) => val ? this.filter(val, this.types) : this.types.slice());
    // this.filteredAreas = this.areaControl.valueChanges.startWith(null).map((val: string) => val ? this.filter(val, this.areas) : this.areas.slice());

    this.searchTermsSubscription = this.jewellery.searchTermsChanged.subscribe(value => {
      this.productName = value["productName"] === "undefined" ? "" : value["productName"];
      this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
      this.area = value["area"] === "undefined" ? "" : value["area"];
    });

    this.toggleSearchFormClass = ['hidden-form'];
    this.toggleBackdrop = true;
  }

  ngOnDestroy() {
    this.searchTermsSubscription.unsubscribe();
  }

  getSelectedArea(area) {
    this.area = area;
  }

  toggleTypeSearch(type) {
    let indexOfType = this.selectedTypes.indexOf(type);
    if (~indexOfType) {
      this.selectedTypes.splice(indexOfType, 1);
      !this.selectedTypes.length && this.selectedTypes.push(this.defaultSelectedType);
      console.log('new type')
    } else {
      if (type == this.defaultSelectedType) {
        this.selectedTypes = [];
        this.selectedTypes.push(type);
        console.log('type all')
      } else {
        this.selectedTypes.includes(this.defaultSelectedType) && this.selectedTypes.splice(this.selectedTypes.indexOf(this.defaultSelectedType), 1);
        this.selectedTypes.push(type);
        console.log('type not all')
      }
    }

    console.log(this.selectedTypes);
  }

  searchProductAndarea(values: any) {
    // console.log(values);
    //
    // for (let property in values) {
    //   console.log(values[`${property}`]);
    //   if (values.hasOwnProperty(property) && values[`${property}`] == null) {
    //     delete values[`${property}`];
    //   }
    // }

    values.area = this.area;
    values.prductName = this.selectedTypes;

    this.router.navigate([`/search/${JSON.stringify(values)}`]);
    this.toggleSearchForm();
  }

  toggleSearchForm() {
    this.toggleSearchFormClass = String(this.toggleSearchFormClass) === String(['hidden-form']) ? ['shown-form'] : ['hidden-form'];

    this.toggleBackdrop = !this.toggleBackdrop;
  }
}
