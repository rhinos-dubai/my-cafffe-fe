import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "nativescript-cardview";
registerElement("CardView", () => CardView);

import { ShopService } from "~/shared/services/shop/shop.service"
import { ProductService } from '~/shared/services/product/product.service';
// import { ProductService } from "~/shared/product/product.service";


@Component({
  moduleId: module.id,
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})



export class HomeComponent implements OnInit {
  constructor( private router:Router, private shopService:ShopService, private prodcutServive:ProductService) {}

  locations;
  filteredShops = false;
  products;

  public ngOnInit() {
    this.shopService.changesearchLocationStatus(true);
    this.shopService.getShopsNearme().subscribe(result => {
      this.locations = result;
      if(this.locations){
        setTimeout(()=>{    
          this.shopService.changesearchLocationStatus(false);
        }, 100);
        
      }
    })

    this.prodcutServive.getAllProducts().subscribe( result => {
      this.products = result;
    })
  }

  routeToSelectItem(){
    this.router.navigate(["select-item"]);
}

}
