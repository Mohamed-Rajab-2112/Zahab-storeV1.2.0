import {Component, OnInit} from "@angular/core";
import {
  JewelleryService
} from "../../shared/services/jewellery.service";
// import {AuthService} from "../../shared/services/auth.service";
// import {Observable} from "rxjs/Rx";
import 'hammerjs';
// import "rxjs/add/operator/map";

// import {Utility} from "../../shared/services/utility.service";


@Component({
  selector: "jewellery-home",
  templateUrl: "./jewellery.home.component.html",
  styleUrls: ["./jewellery.home.component.css"]
})

export class JewelleryHomeComponent implements OnInit {
  mostVisited: any[];
  deals: any[];
  translateValueLatestOffers: number;
  translateValueMostVisited: number;
  maxTranslateValue: number;
  ratioOfIncreasingTranslateValue: number;

  constructor(private Jewellery: JewelleryService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.mostVisited = this.Jewellery.getMostVisitedJewellery();
    this.deals = this.Jewellery.getHotDeals();
    this.translateValueLatestOffers = 0;
    this.translateValueMostVisited = 0;
    console.log(window.innerWidth);
    // this.auth.setNavActive(false);
    // this.utility.setNavBarBackgroundState(true);
  }

  arrow(type: string, direction: string) {
    if (window.innerWidth < 425) {
      /*--- In mobile window ---*/
      this.maxTranslateValue = -90;
      this.ratioOfIncreasingTranslateValue = -10;
    } else {
      /*--- In desktop window ---*/
      this.maxTranslateValue = -75;
      this.ratioOfIncreasingTranslateValue = -25;
    }
    if (type == 'latestOffers' && direction == 'left') {
      if (this.translateValueLatestOffers >= this.maxTranslateValue && this.translateValueLatestOffers != 0) {
        this.translateValueLatestOffers -= this.ratioOfIncreasingTranslateValue;
      }
    } else if (type == 'latestOffers' && direction == 'right') {
      console.log('has issue');
      if (this.translateValueLatestOffers <= 0 && this.translateValueLatestOffers > this.maxTranslateValue) {
        this.translateValueLatestOffers += this.ratioOfIncreasingTranslateValue;
      }
    } else if (type == 'mostVisited' && direction == 'left') {
      if (this.translateValueMostVisited >= this.maxTranslateValue && this.translateValueMostVisited != 0) {
        this.translateValueMostVisited -= this.ratioOfIncreasingTranslateValue;
      }
    } else if (type == 'mostVisited' && direction == 'right') {
      if (this.translateValueMostVisited <= 0 && this.translateValueMostVisited > this.maxTranslateValue) {
        this.translateValueMostVisited += this.ratioOfIncreasingTranslateValue;
      }
    }

    console.log(`latest offer ${this.translateValueLatestOffers}`);
    console.log(`most visited ${this.translateValueMostVisited}`);
  }

}
