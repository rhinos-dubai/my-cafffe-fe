import { Component,Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShopService } from '~/shared/services/shop/shop.service';
import {Router} from "@angular/router";
import { ProductService } from '~/shared/services/product/product.service';
import { ListView } from "tns-core-modules/ui/list-view";
import { ScrollView, ScrollEventData } from "ui/scroll-view"
import { Page, View } from 'tns-core-modules/ui/page/page';
import { GestureEventData } from "tns-core-modules/ui/gestures";

let scroll: ScrollView;



@Component({
  moduleId: module.id,
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  @Input() Locations: any;
  @Input() filteredShops;
  isBusy;
  pageNumber;
  selectedFilters: any[];
  selectedFilterOptions: Array<any> = [];
  id;
  shops: Array<any> = [];
  MoreShops: boolean = false;
  newShops: Array<any> = [];
  loading: Boolean = false;
  private listView: ListView;
  scrollHeight: number;



  constructor(private shopService: ShopService,private productService: ProductService, private router:Router, private page: Page) { }

  ngOnInit() { 
    this.shopService.searchedLocation.subscribe(result =>{
      this.isBusy = result;
      // console.log(result);
    });





    this.productService.currentItem.subscribe(result => {
      this.id = result;
    });

    this.productService.currentPageNumber.subscribe(result => {
      this.pageNumber = result;
    });

    this.shopService.checkForAvailableShops.subscribe(result => {
      this.MoreShops = result;
    });

    setTimeout(() => {
    this.Locations.forEach(element => {
      // console.log(element);
      this.shops.push(element);
      });
    }, 5000);
  }



  changeShopName(item, price, checkComponent){
    console.log(item)
    if(!checkComponent){
      this.router.navigate(["shop", item.id]);
    }
    else{
      this.shopService.changeSeletedShopName(item.shop.name);
      //this.shopService.changeRatebyShop(price);
      this.router.navigate(["confirm-order"]);
    }

  }

  getSelectedFilters(){
    this.selectedFilterOptions = [];
    this.productService.currentSelectedFilters.subscribe(result => {
      this.selectedFilters = result;
      this.selectedFilters.forEach(element => {
        this.selectedFilterOptions.push(element.id);
      });
    })
  }

  load(){
    let  counter = 0
    counter = counter + 1
    console.log("Load More", counter);
  }

  loadMoreItems(){
    // this.loading = true;
    //const listView: RadListView = args.object;
    // console.log("Loading More");

    this.pageNumber += 1;
    this.getSelectedFilters();
    // this.scrollHeight += 1000;
    this.productService.getSelectedItem(this.id, this.selectedFilterOptions,this.pageNumber).subscribe(result => {
       setTimeout(() => {
         console.log(result.shops.result);
         result.shops.result.forEach(element => {
         // this.shopService.addPagination(element);
          //console.log(element);
           this.shops.push(element);
          });
          
        }, 1000)
    });

  }

  
  

}
