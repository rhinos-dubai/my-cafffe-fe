import { Component,Input, OnInit } from '@angular/core';
import { ShopService } from '~/shared/services/shop/shop.service';
import {Router} from "@angular/router";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { ProductService } from '~/shared/services/product/product.service';



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


  constructor(private shopService: ShopService,private productService: ProductService, private router:Router,private routerExtensions: RouterExtensions) { }

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

  getValue(value){
    // console.log(value)
  }

  changeShopName(item, price, checkComponent){
    // console.log(item.name)
    if(!checkComponent){
      this.router.navigate(["shop", item.id]);
    }
    else{
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

  onLoadMoreItemsRequested(event){
    console.log("loading More");
  }
  

  loadMoreItems(event){
    console.log(event);
    this.pageNumber += 1;
    this.getSelectedFilters();
    // console.log(this.id);
    // console.log(this.selectedFilterOptions)
    this.productService.getSelectedItem(this.id, this.selectedFilterOptions,this.pageNumber).subscribe(result => {
      // this.shopService.changeAvailableShops(result.shops);
      this.shops.push(result.shops);
        result.shops.forEach(element => {
          this.shopService.addPagination(element);
        });
      if(result.shops.length == 0){
        alert('No More Shops');
        this.pageNumber = 0;
        this.shopService.changeShopsAvailbilityStatus(false);
      }
    })
    // console.log(this.pageNumber);
    // this.getLocations();
  }

  
  

}
