import { Component, OnInit } from '@angular/core';
import { ProductService } from '~/shared/services/product/product.service';
import { ShopService } from '~/shared/services/shop/shop.service';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

let LS = require( "nativescript-localstorage" );

@Component({
  moduleId: module.id,
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  showCart: boolean = false;

  constructor(private productService:ProductService, private shopService: ShopService) { }

  seletedItem = this.productService.currentItemName;
  seletedShop = this.shopService.SeletedShopName;
  selectedRate = this.shopService.currentShopItemRate;
  selectedFilters: Array<any> = []; 
  cart: Object = {};
  
  

  ngOnInit() {
    this.productService.currentSelectedFilters.subscribe(result => {

      
      const source = from(result);

      const groupByProperties = source.pipe(
          groupBy(result => result['property_group']),
          // return each item in group as array
          mergeMap(group => group.pipe(toArray()))
        );

        const subscribeToProperties = groupByProperties.subscribe(val => {
         
          this.selectedFilters.push(val);
        });
    })
   }


}
