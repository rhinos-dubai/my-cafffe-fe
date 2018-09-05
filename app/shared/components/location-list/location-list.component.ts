import { Component,Input, OnInit } from '@angular/core';
import { ShopService } from '~/shared/services/shop/shop.service';

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
  constructor(private shopService: ShopService) { }

  ngOnInit() { 
    this.shopService.searchedLocation.subscribe(result =>{
      this.isBusy = result;
    })
  }

  getValue(value){

    console.log(value)

  }

}
