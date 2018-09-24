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



let view1: View;
let filterListView: View;
let shopListView: View;
let floatingButton: View;


import {ProductService} from "~/shared/services/product/product.service"
import { ShopService } from "~/shared/services/shop/shop.service"
import { ScrollEventData, ScrollView } from 'tns-core-modules/ui/scroll-view/scroll-view';

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
  pageNumber;
  shops: Array<any> = [];
  MoreShops: boolean = false;
  selectedFilters: any[];
  selectedFilterOptions: Array<any> = [];
  totalLocations: any = 0;
  scrollView: ScrollView;
  

  

  constructor(private page: Page, private route: ActivatedRoute, private productService:ProductService, private shopService:ShopService) { }


  ngOnInit() {}

  ngAfterViewInit() {
        this.shopService.changeShopsAvailbilityStatus(true);

        this.productService.getAllProducts().subscribe( result => {
          this.products = result;
          this.shopService.changesearchLocationStatus(true);
        });

        this.productService.currentPageNumber.subscribe(result => {
          this.pageNumber = result;
        })

        this.shopService.checkForAvailableShops.subscribe(result => {
          this.MoreShops = result;
        })
      




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

      this.getLocationSize();
  }

  getLocationSize() {
    this.locationList.subscribe(data => {
      this.locationListSize = [];
      setTimeout(() => {
          data.forEach(element => {
          // console.log(element.shop);
          this.locationListSize.push(element.shop);
        }, 200)
      });
    })
  }

  getGenericProperties(){

    this.productService.getSelectedItem(this.id,[],this.pageNumber).subscribe(result => {
      setTimeout(() => {
      this.shopService.changeAvailableShops(result.shops.result);
      }, 200)
      this.genericProperties = result.generic_properties;
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
    this.productService.getSelectedItem(this.id,[],this.pageNumber).subscribe(data => {
      // console.log(data.shops.result)
      this.filteredShops = true;
      this.shopService.changeTotalLocations(data.shops.resultCount);
      this.shopService.changeAvailableShops(data.shops.result);

      this.shopService.checkforTotalLocations.subscribe(result => {
        this.totalLocations = result;
      })
      if(data.shops.result == []){
        console.log("no More Shops");
        this.productService.changePageNumber(1);
      };

            this.shopService.changesearchLocationStatus(false);


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

  onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
    // If the header content is still visiible
    // console.log(scrollView.verticalOffset);
    if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 2;
        if (scrollView.ios) {
            // iOS adjust the position with an animation to create a smother scrolling effect. 
            topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
        } else {
            // Android, animations are jerky so instead just adjust the position without animation.
            topView.translateY = Math.floor(offset);
        }
    }
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
