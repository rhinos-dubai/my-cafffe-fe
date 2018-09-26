import { Component,Input, OnInit  } from '@angular/core';
import { ShopService } from '~/shared/services/shop/shop.service';
import {Router} from "@angular/router";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { ProductService } from '~/shared/services/product/product.service';

import { ListView } from "tns-core-modules/ui/list-view";
import { isIOS } from 'tns-core-modules/platform/platform';
import { RadListView } from 'nativescript-ui-listview';
import * as applicationModule from 'application';
import { Color } from 'color';
import { ScrollView } from 'tns-core-modules/ui/scroll-view/scroll-view';
import { take } from 'rxjs/operators';


@Component({
  moduleId: module.id,
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  @Input() Locations: any;
  @Input() filteredShops;
  scrollView: ScrollView;
  isBusy;
  pageNumber;
  selectedFilters: any[];
  selectedFilterOptions: Array<any> = [];
  id;
  shops: Array<any> = [];
  MoreShops: boolean = false;
  newShops: Array<any> = [];
  loading: Boolean = false;
  scrollHeight: number;
  differ: any;
  myRadListView: RadListView;

  private listView: ListView;

  constructor(private shopService: ShopService,private productService: ProductService, private router:Router,private routerExtensions: RouterExtensions) { }

  ngOnInit() { }

  ngAfterViewInit(){

    setTimeout(() => {

      this.shopService.searchedLocation.subscribe(result =>{
        this.isBusy = result;
        console.log(result);
      });

    }, 200)



    this.productService.currentItem.subscribe(result => {
      this.id = result;
    });

    this.productService.currentPageNumber.subscribe(result => {
      this.pageNumber = result;
    });

    this.shopService.checkForAvailableShops.subscribe(result => {
      this.MoreShops = result;
    });


  }



  changeShopName(item, price, checkComponent){
      this.shopService.changeCafe(item);
      this.shopService.changeSeletedShopName(item.shop.name);
      this.shopService.changeRatebyShop(price);
      // this.router.navigate(["confirm-order"]);
        this.routerExtensions.navigate(["confirm-order"], {
            transition: {
                name: "slideLeft",
                duration: 300,
                curve: "easeOut"
            }
        });
    }

  getSelectedFilters(){
    this.selectedFilterOptions = [];
    this.productService.currentSelectedFilters.pipe(take(1))
    .subscribe(result => {
      this.selectedFilters = result;
      this.selectedFilters.forEach(element => {
        this.selectedFilterOptions.push(element.id);
      });
      console.log(this.selectedFilterOptions);
    })
  }



  onLoadMoreItemsRequested(){
    this.loading = true;
    console.log("loaded");
    this.pageNumber += 1;
    this.getSelectedFilters();

    this.productService.getSelectedItem(this.id, this.selectedFilterOptions,this.pageNumber).subscribe(result => {
      setTimeout(() => {
        console.log(result.shops);
        if(result.shops.result == ''){
          alert("No More Shops");
        }
        else{
        result.shops.result.forEach(element => {
         this.shopService.addPagination(element);
         // console.log(element);
         //  this.shops.push(element);
         this.loading = false;

         });
       }      
       }, 200)   
    });
  }

  
  

}
