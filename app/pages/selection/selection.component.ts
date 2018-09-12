import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import {AnimationCurve} from "ui/enums";


import { Page } from "ui/page";
import { View } from "ui/core/view";
import { Animation, AnimationDefinition } from "ui/animation";
const platformModule = require("tns-core-modules/platform");
// import { screen, ScreenMetrics } from "platform";
// let screenScale = screen.mainScreen.scale;

let filterListView: View;
let shopListView: View;
let floatingButton: View;


import {ProductService} from "~/shared/services/product/product.service"
import { ShopService } from "~/shared/services/shop/shop.service"

@Component({
  moduleId: module.id,
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
    shopListHeight = platformModule.screen.mainScreen.heightDIPs;
    selectedItem = this.productService.currentItemName;
  genericProperties: any;
  tempItemsService: any;
  genericProperties_values: Array<any> = [];
  products;
  animateFor = true;
  id: number;
  locations;
  filteredShops = false;
  locationList = this.shopService.filteredShops;
  locationListSize = [];
  pageNumber = 1;
  shops: Array<any> = [];
  noMoreShops: boolean = false;
  selectedFilters: any[];
  selectedFilterOptions: Array<any> = [];
  

  

  constructor(private page: Page, private route: ActivatedRoute, private productService:ProductService, private shopService:ShopService) { }


  ngOnInit() {

      this.productService.currentPageNumber.subscribe(result => {
        this.pageNumber = result;
        console.log(this.pageNumber);
      })
      
      setTimeout(()=>{

      this.locationList.subscribe(result => {
        this.locationListSize = [];
          result.forEach(element => {
              this.locationListSize.push(element);
              // console.log(this.locationListSize.length)
          });
      })
      }, 2000);

    this.productService.getAllProducts().subscribe( result => {
      this.products = result;
      this.shopService.changesearchLocationStatus(true);
    });

    filterListView = this.page.getViewById<View>("filterlist");
    shopListView = this.page.getViewById<View>("locationList");
    floatingButton = this.page.getViewById<View>("floatingButton");
    // locationList.translateY = 0;
    // floatingButton.translateY = -325


    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.productService.changeSelectedItemID(this.id);
      // console.log(this.id);
    });

    this.getGenericProperties();
    this.getLocations();
    this.getSelectedFilters();
  }

  getGenericProperties(){

    this.productService.getSelectedItem(this.id,null,this.pageNumber).subscribe(result => {

      this.genericProperties = result.generic_properties;
      this.shopService.changeAvailableShops(result.shops);
      
      const source = from(this.genericProperties);

      const groupByProperties = source.pipe(
          groupBy(result => result['property_group']),
          // return each item in group as array
          mergeMap(group => group.pipe(toArray()))
        );

        const subscribeToProperties = groupByProperties.subscribe(val => {
          // console.log(val);
          this.genericProperties_values.push(val);
        });
    });

  }

  getLocations(){
    this.productService.getSelectedItem(this.id,[],this.pageNumber).subscribe(result => {
      this.shopService.changeAvailableShops(result.shops);
      // console.log(result.shops);
      if(result.shops == ''){
        console.log("no More Shops");
        this.productService.changePageNumber(1);
        this.noMoreShops = true;
        // this.shopsDemo = true;
        // close LoadMore Button
      };
      result.shops.forEach(element => {
        // this.shops.push(element);
      });
      // console.log(this.shops);
      setTimeout(()=>{ 
        this.shopService.changesearchLocationStatus(false);
      }, 100);
      
      this.filteredShops = true;
    })
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

  loadMore(){
    this.pageNumber += 1;
    this.getSelectedFilters();
    console.log(this.id);
    console.log(this.selectedFilterOptions)
    this.productService.getSelectedItem(this.id, this.selectedFilterOptions,this.pageNumber).subscribe(result => {
      // this.shopService.changeAvailableShops(result.shops);
      this.shops.push(result.shops);
      // console.log(result.shops);
      setTimeout(()=>{
        result.shops.forEach(element => {
          this.shopService.addPagination(element);
        });
      
      }, 1000);
      if(result.shops.length == 0){
        alert('No More Shops');
        this.pageNumber = 0;
        this.noMoreShops = true;
      }
    })
    // console.log(this.pageNumber);
    // this.getLocations();
  }

  animate() {
    if(this.animateFor){
      let definitions = new Array<AnimationDefinition>();
      let a1: AnimationDefinition = {
          target: shopListView,
          // translate: { x: 0, y: -filterListView.getMeasuredHeight() / screenScale },
          translate: { x: 0, y: -filterListView.getActualSize().height },
          // scale: {x: 0, y: 0},
          curve: AnimationCurve.easeOut,
          duration: 200
      };
      // console.log('Y: ' + -filterListView.getMeasuredHeight() / screenScale);
      console.log('getActualSize(): ' + -filterListView.getActualSize().height);

        let a2: AnimationDefinition = {
            target: floatingButton,
            rotate: 180,
            curve: AnimationCurve.easeOut,
            duration: 200
        };

      definitions.push(a1);
      definitions.push(a2);

      let animationSet = new Animation(definitions);
  
      animationSet.play().then(() => {
          // console.log("Animation finished");
      })
          .catch((e) => {
              console.log(e.message);
          });

    }
    else if(!this.animateFor){
      let definitions = new Array<AnimationDefinition>();
      let a1: AnimationDefinition = {
          target: shopListView,
          translate: { x: 0, y: 0 },
          // scale: {x: 1, y: 1},

          curve: AnimationCurve.easeOut,
          duration: 100
      };
      let a2: AnimationDefinition = {
            target: floatingButton,
            rotate: 0,
            curve: AnimationCurve.easeOut,
            duration: 200
        };
        definitions.push(a1);
        definitions.push(a2);
      let animationSet = new Animation(definitions);
  
      animationSet.play().then(() => {
          // console.log("Animation finished");
      })
          .catch((e) => {
             //  console.log(e.message);
          });
    }
 
  }

  

}
