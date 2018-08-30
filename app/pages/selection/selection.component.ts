import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';


import { Page } from "ui/page";
import { View } from "ui/core/view";
import { Animation, AnimationDefinition } from "ui/animation";

import {ProductService} from "~/shared/product/product.service"
import { ShopService } from "~/shared/shop/shop.service"

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

  

}
