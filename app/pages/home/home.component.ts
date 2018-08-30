import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "nativescript-cardview";
registerElement("CardView", () => CardView);

import { ShopService } from "~/shared/shop/shop.service"
// import { ProductService } from "~/shared/product/product.service";


@Component({
  moduleId: module.id,
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})



export class HomeComponent implements OnInit {
  constructor( private router:Router, private shopService:ShopService) {}

  locations;
  filteredShops = false;

  public ngOnInit() {
    this.shopService.getShopsNearme().subscribe(result => {
      this.locations = result;
    })
  }

  routeToSelectItem(){
    this.router.navigate(["select-item"]);
}

}
