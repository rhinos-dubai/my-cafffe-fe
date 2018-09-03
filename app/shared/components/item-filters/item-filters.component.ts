import { Component,Input, OnInit } from '@angular/core';
import { ProductService } from '~/shared/services/product/product.service';
import { ShopService } from '~/shared/services/shop/shop.service';

@Component({
  moduleId: module.id,
  selector: 'item-filters',
  templateUrl: './item-filters.component.html',
  styleUrls: ['./item-filters.component.scss']
})
export class ItemFiltersComponent implements OnInit {

  @Input() filters;
  selectedItem;
  Selectedoptions: Array<any> = [];
  SelectedoptionsName: Object = {data:[]};
  isBusy: any;

  constructor(private productService:ProductService, private shopService:ShopService) { }

  ngOnInit() { }

  onSelectionTap(filters,filterName){
    this.productService.currentItem.subscribe(result => {
      this.selectedItem = result;
      console.log(this.selectedItem);
    })
    this.Selectedoptions.push(filters);
    this.SelectedoptionsName['data'].push(filterName);
  }

  filterProducts(){

    // console.log(this.Selectedoptions);
    this.shopService.changesearchLocationStatus(true);
    console.log(this.Selectedoptions);
    this.productService.getSelectedItem(this.selectedItem,this.Selectedoptions).subscribe(
        data =>{
            this.shopService.changeAvailableShops(data.shops);
            // console.log(data);
            setTimeout(()=>{    //<<<---    using ()=> syntax
              this.shopService.changesearchLocationStatus(false);
            }, 100);
        })
  }

  resetFilters(){
    this.Selectedoptions = [];
    this.SelectedoptionsName = {data:[]}
  }

  

}
