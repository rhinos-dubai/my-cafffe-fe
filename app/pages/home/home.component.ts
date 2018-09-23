import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "nativescript-cardview";
registerElement("CardView", () => CardView);

import { ShopService } from "~/shared/services/shop/shop.service"
import { ProductService } from '~/shared/services/product/product.service';
import set = Reflect.set;
// import { ProductService } from "~/shared/product/product.service";


@Component({
  moduleId: module.id,
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})



export class HomeComponent implements OnInit {
  constructor( private router:Router, private shopService:ShopService, private prodcutServive:ProductService,private routerExtensions: RouterExtensions) {}

  locations;
  filteredShops = false;
  products;

  public ngOnInit() {  }

    ngAfterViewInit() {

    setTimeout(() => {

        this.shopService.getShopsNearme().subscribe(result => {
            this.locations = result;
        });

        this.prodcutServive.getAllProducts().subscribe( result => {
            this.products = result;
        });

    }, 1000);

    }

  routeToSelectItem(){
    // this.router.navigate(["select-item"]);

      this.routerExtensions.navigate(['select-item'], {
          transition: {
              name: "slideLeft",
              duration: 300,
              curve: "easeOut"
          }
      });
}

    routeToShopPage(shop){
        console.log(shop)
        this.routerExtensions.navigate(['shop', shop.id], {
            transition: {
                name: "slideLeft",
                duration: 300,
                curve: "easeOut"
            }
        });
    }

}
