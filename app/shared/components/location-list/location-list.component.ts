import { Component,Input, OnInit } from '@angular/core';
import { ShopService } from '~/shared/services/shop/shop.service';
import {Router} from "@angular/router";

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
  constructor(private shopService: ShopService, private router:Router) { }

  ngOnInit() { 
    this.shopService.searchedLocation.subscribe(result =>{
      this.isBusy = result;
    })
  }

  getValue(value){
    console.log(value)
  }

  changeShopName(item, price, checkComponent){
    console.log(item.name)
    if(!checkComponent){
      this.router.navigate(["shop", item.id]);
    }
    else{
      this.shopService.changeSeletedShopName(item.shop.name);
      this.shopService.changeRatebyShop(price);
      this.router.navigate(["confirm-order"]);
    }

  }

}
