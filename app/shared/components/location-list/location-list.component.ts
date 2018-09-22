import { Component,Input, OnInit  } from '@angular/core';
import { ShopService } from '~/shared/services/shop/shop.service';
import {Router} from "@angular/router";
import { ProductService } from '~/shared/services/product/product.service';

import { ListView } from "tns-core-modules/ui/list-view";
import { isIOS } from 'tns-core-modules/platform/platform';
import { RadListView } from 'nativescript-ui-listview';


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
  scrollHeight: number;
  differ: any;

  private listView: ListView;




  constructor(private shopService: ShopService,private productService: ProductService, private router:Router, ) { 
  }


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
  }



  changeShopName(item, price, checkComponent){
      this.shopService.changeCafe(item);
      this.shopService.changeSeletedShopName(item.shop.name);
      this.shopService.changeRatebyShop(price);
      this.router.navigate(["confirm-order"]);

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
    console.log("loading");
    this.pageNumber += 1;
    this.getSelectedFilters();
      /*this.productService.getSelectedItem(this.id, this.selectedFilterOptions,this.pageNumber).subscribe(result => {
       setTimeout(() => {
         console.log(result.shops.result);
         if(result.shops.result == ''){
           alert("No More Shops");
         }
         else{
         result.shops.result.forEach(element => {
          this.shopService.addPagination(element);
          console.log(element);
          setTimeout(() => {
          this.shops.push(element);
            }, 1000)
          });
        }          
        }, 1000)
      });*/
      
  }

  onLoadMoreItemsRequested(args){
    console.log("loaded");
    this.pageNumber += 1;
    this.getSelectedFilters();

    this.productService.getSelectedItem(this.id, this.selectedFilterOptions,this.pageNumber).subscribe(result => {
      setTimeout(() => {
        console.log(result.shops.result);
        if(result.shops.result == ''){
          alert("No More Shops");
        }
        else{
        result.shops.result.forEach(element => {
         this.shopService.addPagination(element);
         // console.log(element);
         //  this.shops.push(element);
         });
       }      
       }, 200)   
    });

    setTimeout(() => {
    const listView: RadListView = args.object;
    listView.notifyLoadOnDemandFinished(); 
    }, 1000) 
  }

  
  

}
