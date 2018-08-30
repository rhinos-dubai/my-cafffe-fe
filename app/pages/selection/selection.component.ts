import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import {AnimationCurve} from "ui/enums";


import { Page } from "ui/page";
import { View } from "ui/core/view";
import { Animation, AnimationDefinition } from "ui/animation";

let view1: View;

import {ProductService} from "~/shared/services/product/product.service"
import { ShopService } from "~/shared/services/shop/shop.service"

@Component({
  moduleId: module.id,
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  selectedItem = {};
  genericProperties: any;
  tempItemsService: any;
  genericProperties_values: Array<any> = [];

  

  constructor(private page: Page, private route: ActivatedRoute, private productService:ProductService, private shopService:ShopService) { }

  id: number;
  private sub: any;
  locations;
  filteredShops = false;
  locationList = this.shopService.filteredShops;

  ngOnInit() { 

    view1 = this.page.getViewById<View>("view1");
    view1.translateY = -100;


    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.productService.changeSelectedItemID(this.id);
      console.log(this.id);
    });

    this.productService.getSelectedItem(this.id,null).subscribe(result => {

                this.selectedItem = result;
                this.genericProperties = result.generic_properties;
                this.shopService.changeAvailableShops(result.shops);
                // console.log(data.shops);
                // this.locationListItems = data.shops;
                
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

    this.productService.getSelectedItem(this.id,[]).subscribe(result => {
      this.shopService.changeAvailableShops(result.shops);
      // console.log(this.locations);
      this.filteredShops = true;
    })
  }

  animate() {
        
    let definitions = new Array<AnimationDefinition>();
    let a1: AnimationDefinition = {
        target: view1,
        translate: { x: 0, y: -500 },
        curve: AnimationCurve.easeOut,
        duration: 400
    };
    definitions.push(a1);

    let animationSet = new Animation(definitions);

    animationSet.play().then(() => {
        console.log("Animation finished");
    })
        .catch((e) => {
            console.log(e.message);
        });
  }

  

}
