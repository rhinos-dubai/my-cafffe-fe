import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '~/shared/services/product/product.service';
import { ShopService } from '~/shared/services/shop/shop.service';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { Page } from "ui/page";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "ui/dialogs";
import { View } from "ui/core/view";
import { Animation, AnimationDefinition } from "ui/animation";
import {AnimationCurve} from 'tns-core-modules/ui/enums';


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

  constructor(private productService:ProductService, private shopService: ShopService, private page: Page, private routerExtensions: RouterExtensions) {this.page.actionBarHidden = true; }

  seletedItem = this.productService.currentItemName;
  seletedShop = this.shopService.SeletedShopName;
  selectedRate;
  selectedCafe = this.shopService.selectedCafe;
  selectedFilters: Array<any> = [];
  genericProperties: any;
  genericProperties_values: Array<any> = [];
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



    public checkedChange(args) {
        console.log(args);
    }

  ngOnInit() {
      

    this.selectedCafe.subscribe(result => {
        this.Cafe['name'] = result['shop'].name;
        this.Cafe['location'] = result['shop'].address;
        this.Cafe['image'] = result['shop'].image.secure_url;
        this.Cafe['addons'] = result['addons'];

    });

    this.shopService.currentShopItemRate.subscribe(result => {
        this.selectedRate = result;
    })

     
    this.productService.currentSelectedFilters.subscribe(result => {
    
      const source = from(result);

      result.forEach(element => {
          this.selectedFilters.push(element);
      });
         this.Cafe['filters'] = this.selectedFilters;
    });


    // Temporary Start
    //   this.productService.getSelectedItem(1,null,null).subscribe(result => {
    //
    //       this.genericProperties = result.generic_properties;
    //       this.shopService.changeAvailableShops(result.shops);
    //
    //       const source = from(this.genericProperties);
    //
    //       const groupByProperties = source.pipe(
    //           groupBy(result => result['property_group']),
    //           // return each item in group as array
    //           mergeMap(group => group.pipe(toArray()))
    //       );
    //
    //       const subscribeToProperties = groupByProperties.subscribe(val => {
    //           // console.log(val);
    //           this.genericProperties_values.push(val);
    //       });
    //   });
    // Temporary End



      selectedFiltersView = this.page.getViewById<View>("view-selectedFilters");
      selectedOptionsAddonsView = this.page.getViewById<View>("view-selectedOptions-addOns");

      selectedFiltersView.scaleY = 0;
      selectedFiltersView.scaleX = 0;
      selectedFiltersView.visibility = 'collapse';

      // selectedOptionsAddonsView.translateY = -300;
      // console.log('getActualSize() in Confirm: ' + -selectedFiltersView.getActualSize().height);


      // Temp-Fooqi Static Data Start
      this.getGenericProperties();

    /*  this.selectedFilters= [
        { id: 10, name: 'Size', value: 'small' },
        { id: 11, name: 'Sugar', value: '3' },
        { id: 12, name: 'Strength', value: 'Decaf' },
        { id: 13, name: 'Milk', value: 'regular' },
        // { id: 14, name: 'This is Long', value: 'Long Value' },
        { id: 15, name: 'Shot', value: 'Double' },

    ]; */

      // Temp-Fooqi Static Data End
   }

    // Temp-Fooqi Static Data Start

    getGenericProperties(){

        this.productService.getSelectedItem(1,null,1).subscribe(result => {
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
          this.itemQty+=number;
      }
   }

   editFilters(){

      if(this.animateFor) {

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
       // console.log('getActualSize() in Confirm: ' + -selectedFiltersView.getActualSize().height);

   }

}
