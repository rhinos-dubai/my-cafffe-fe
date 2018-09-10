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
  @Input() showActionButtons;
  selectedItem;
  Selectedoptions: Array<any> = [];
  SelectedoptionsName: Object = {data:[]};
  filtersbyUser: Array<any> = [];
  isBusy: any;
  showOptionButtons = false;;

  constructor(private productService:ProductService, private shopService:ShopService) { }

  ngOnInit() { 
  }

  onSelectionTap(filters,filterName){
    this.showActionButtons = true;
    this.productService.currentItem.subscribe(result => {
      this.selectedItem = result;
        })
    this.Selectedoptions.push(filters);
    this.SelectedoptionsName['data'].push(filterName);
  }

  filtersSelectedByUser(item){
    this.filtersbyUser.push(item);
    // console.log(this.filtersbyUser);
    this.productService.changeSelectedFilters(this.filtersbyUser);
  }

  filterProducts(){

    // console.log(this.Selectedoptions);
    this.shopService.changesearchLocationStatus(true);
    this.productService.getSelectedItem(this.selectedItem,this.Selectedoptions).subscribe(
        data =>{
            this.shopService.changeAvailableShops(data.shops);
            setTimeout(()=>{    
              this.shopService.changesearchLocationStatus(false);
            }, 100);
        })
  }

  resetFilters(){
    setTimeout(()=>{   
    this.filterProducts();
    }, 1000);
    this.Selectedoptions = [];
    this.SelectedoptionsName = {data:[]}
    this.productService.changeSelectedFilters([]);
    this.filtersbyUser = []
    this.showActionButtons = false;
    
  }

  

}
