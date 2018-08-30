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
  Selectedoptions: Array<any> = [];;

  constructor(private productService:ProductService, private shopService:ShopService) { }

  ngOnInit() { }

  onSelectionTap(filters){
    this.productService.currentItem.subscribe(result => {
      this.selectedItem = result;
      console.log(this.selectedItem);
    })
    this.Selectedoptions.push(filters);
    console.log(this.Selectedoptions)
  }

  filterProducts(){

    // console.log(this.Selectedoptions);
    this.productService.getSelectedItem(this.selectedItem,this.Selectedoptions).subscribe(
        data =>{
            this.shopService.changeAvailableShops(data.shops);
            // console.log(data);
            this.resetFilters();
        })
  }

  resetFilters(){
    this.Selectedoptions = [];
  }

  

}
