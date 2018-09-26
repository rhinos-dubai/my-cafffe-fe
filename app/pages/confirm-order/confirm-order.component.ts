import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '~/shared/services/product/product.service';
import { ShopService } from '~/shared/services/shop/shop.service';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray, take } from 'rxjs/operators';
import { Page } from "ui/page";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "ui/dialogs";
import { View } from "ui/core/view";
import { Animation, AnimationDefinition } from "ui/animation";
import {AnimationCurve} from 'tns-core-modules/ui/enums';

import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Image } from 'tns-core-modules/ui/image';
import { screen } from 'tns-core-modules/platform';


let LS = require( "nativescript-localstorage" );
let selectedFiltersView: View;
let selectedOptionsAddonsView: View;

@Component({
  moduleId: module.id,
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  showCart: boolean = false;
  NoSelectedFilters: boolean = false;
  checkTest: boolean;

  constructor(private productService:ProductService, private shopService: ShopService, private page: Page, private routerExtensions: RouterExtensions , private _page: Page) {this.page.actionBarHidden = true; }

  seletedItem = this.productService.currentItemName;
  selectedId;
  seletedShop = this.shopService.SeletedShopName;
  selectedRate;
  itemRate;
  selectedCafe = this.shopService.selectedCafe;
  selectedFilters: Array<any> = [];
  genericProperties: any;
  genericProperties_values: Array<any> = [];
  addonsGroup: Array<any> = []
  itemQty: number = 1;
  animateFor = true;
  Cafe: Object = {name:"Cafe Name",
                  location:"Cafe Location",
                    Image: "Image",
                    addons:""};
                    option = {addon:null};
                    


  // Temp-Fooqi Start
    pageNumber;

    // Temp-Fooqi End

    public checkedChange(modelRef,option) {
        console.log("checkedChange:", modelRef.checked);
        if(modelRef.checked){
            this.selectedRate = this.selectedRate + option.price;
            this.itemRate = this.itemRate + option.price;
        }
        else {
            this.selectedRate = this.selectedRate - option.price;
            this.itemRate = this.itemRate - option.price;


        }
      }

  ngOnInit() {
    this.selectedCafe.subscribe(result => {
        this.Cafe['name'] = result['shop'].name;
        this.Cafe['location'] = result['shop'].address;
        this.Cafe['image'] = result['shop'].image.secure_url;
        this.Cafe['addons'] = result['addons'];
        this.selectedId = result['id'];

        console.log(result['addons'])
        const source = from(result['addons']);
            const groupByProperties = source.pipe(
                groupBy(result => result['addon_group']),
                // return each item in group as array
                mergeMap(group => group.pipe(toArray()))
            );
            groupByProperties.subscribe(val => {
                console.log(val);
                this.addonsGroup.push(val);
            });
        // console.log("selected Id:" ,this.selectedId);
    });








      this.shopService.currentShopItemRate.subscribe(result => {
        this.selectedRate = result;
        this.itemRate = result;
    })
  
   }

   ngAfterViewInit() {
       //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
       //Add 'implements AfterViewInit' to the class.



       setTimeout(() =>{
        this.productService.currentSelectedFilters.subscribe(result => {

            this.Cafe['filters'] = result;
           // console.log(this.Cafe['filters']);
        })
    }, 2000)
     
      selectedFiltersView = this.page.getViewById<View>("view-selectedFilters");
      selectedOptionsAddonsView = this.page.getViewById<View>("view-selectedOptions-addOns");

      selectedFiltersView.scaleY = 0;
      selectedFiltersView.scaleX = 0;
      selectedFiltersView.visibility = 'collapse';

      this.getGenericProperties();
   }

    // Temp-Fooqi Static Data Start

    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
        // If the header content is still visiible
        console.log(scrollView.verticalOffset);
        if (scrollView.verticalOffset < 200) {
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

    getGenericProperties(){

        this.productService.currentDefaultFilters.pipe(take(1))
        .subscribe(result =>{
          this.selectedFilters = result;
        })

        this.productService.getSelectedItem(this.selectedId,this.selectedFilters,1).subscribe(result => {
            console.log(result);
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

    // Temp-Fooqi Static Data End

    


    qtyChange(number){

      if((this.itemQty + number) < 1 ){
          dialogs.confirm({
              title: "Deleting Item",
              message: "Are you sure you want to remove the item?",
              okButtonText: "Confirm",
              cancelButtonText: "Cancel"
          }).then(result => {
              // result argument is boolean

              if(result) {
                  this.routerExtensions.navigate(["/home"], {
                      transition: {
                          name: "slideRight",
                          duration: 300,
                          curve: "linear"
                      }
                  });
              }
          });

      } else {
          // this.itemQty+=number;
          console.log(number);
          if(number == +1){
            this.itemQty = this.itemQty + 1
            this.selectedRate = this.itemRate * this.itemQty;
          }
          else{
            console.log(this.itemQty);
            this.selectedRate = this.selectedRate - this.itemRate;
            this.itemQty = this.itemQty - 1
          }
          
      }
   }

   editFilters(){


    this.routerExtensions.backToPreviousPage();


      /*if(this.animateFor) {

          this.animateFor = false;
          selectedFiltersView.visibility = 'visible';

          let definitions = new Array<AnimationDefinition>();
          let a1: AnimationDefinition = {
              target: selectedFiltersView,
              scale: {x: 1, y:1},
              curve: AnimationCurve.easeOut,
              duration: 200
          };
          selectedOptionsAddonsView.visibility = 'collapse';
          selectedOptionsAddonsView.scaleX = 0;
          selectedOptionsAddonsView.scaleY = 0;

          definitions.push(a1);
          let animationSet = new Animation(definitions);
          animationSet.play().then(() => {}).catch((e) => {});


      } else {
          this.animateFor = true;
          // selectedFiltersView.scaleY = 0;
          // selectedOptionsAddonsView.scaleY = 1;
          // selectedOptionsAddonsView.visibility = 'visible';
          // selectedFiltersView.visibility = 'collapse';


          selectedOptionsAddonsView.visibility = 'visible';

          let definitions = new Array<AnimationDefinition>();
          let a1: AnimationDefinition = {
              target: selectedOptionsAddonsView,
              scale: {x: 1, y:1},
              curve: AnimationCurve.easeOut,
              duration: 200
          };
          selectedFiltersView.visibility = 'collapse';
          selectedFiltersView.scaleX = 0;
          selectedFiltersView.scaleY = 0;

          definitions.push(a1);
          let animationSet = new Animation(definitions);
          animationSet.play().then(() => {}).catch((e) => {});



      }

      // console.log('Test ANimate');
       // selectedOptionsAddonsView.translateY = -selectedFiltersView.getActualSize().height;
       // console.log('getActualSize() in Confirm: ' + -selectedFiltersView.getActualSize().height);*/

   }

}
