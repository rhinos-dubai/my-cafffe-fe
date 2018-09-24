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
  showOptionButtons = false;
  pageNumber;
  selectedID;

  constructor(private productService:ProductService, private shopService:ShopService) { }

  ngOnInit() { 
    this.productService.currentPageNumber.subscribe(result => {
      this.pageNumber = result;
    })
  }

    
  onSelectionTap(filters,filterName,itemIndex){
    this.productService.changePageNumber(1);
    this.showActionButtons = true;
    this.productService.currentItem.subscribe(result => {
      this.selectedItem = result;
        });
    console.log('filters: ' + filters);
    console.log('itemIndex: ' + itemIndex);
    // this.Selectedoptions.push(filters);

      if(this.Selectedoptions[itemIndex] == filters) {
          // this.Selectedoptions[itemIndex] = null;
          this.Selectedoptions.splice(itemIndex, 1);
      } else {
          this.Selectedoptions[itemIndex] = filters;
      }

      // this.SelectedoptionsName['data'].push(filterName);

      if(this.SelectedoptionsName[itemIndex] == filters) {
          // this.Selectedoptions[itemIndex] = null;
          this.SelectedoptionsName['data'][itemIndex] = null;

      } else {
          this.SelectedoptionsName['data'][itemIndex] = filterName;
      }
  }

  filtersSelectedByUser(item){
    // console.log(this.filtersbyUser);
    if(this.filtersbyUser == []){
      this.filtersbyUser.push(item);
    }
    else{
      this.filtersbyUser.forEach(element =>{
        console.log(element)
        if(element.id == item.id){
          alert("Already Selected");
        }
        //console.log(element);
      });

    }
  
    // console.log(item);
    // console.log(this.filtersbyUser);
    this.productService.changeSelectedFilters(this.filtersbyUser);
  }

  filterProducts(){
    this.shopService.changeShopsAvailbilityStatus(true);
    console.log(this.Selectedoptions);
    this.shopService.changesearchLocationStatus(true);
    this.productService.getSelectedItem(this.selectedItem,this.Selectedoptions,this.pageNumber).subscribe(
        data =>{
            this.shopService.changeTotalLocations(data.shops.resultCount);
            this.shopService.changeAvailableShops(data.shops.result);
            // console.log(data.shops.result);
            data.shops.result.forEach(element => {
              let count = [];
              count.push(element);
              console.log(count.length);
            });
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
    this.productService.changePageNumber(1);
  }


  

}
