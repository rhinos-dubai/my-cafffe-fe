import { Component,Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ProductService } from '~/shared/services/product/product.service';
import { ShopService } from '~/shared/services/shop/shop.service';
import {  takeWhile, takeUntil, take } from 'rxjs/operators';
import { from, Subject, Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'item-filters',
  templateUrl: './item-filters.component.html',
  styleUrls: ['./item-filters.component.scss']
})
export class ItemFiltersComponent implements OnInit, OnDestroy, AfterViewInit {

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
  ObservableFilters: Array<any> = [];
  AvailableFilters: Array<any> = [];
  public icons = [];
  genericProperties: any;
  showIcon: any;
  showIconClass: boolean;
  allSelectedFilters: Array<any> = [];
  resultSize: any[] = [];
  subscription: Subscription
  private unsubscribe$ = new Subject();
  alive: boolean = true;




  constructor(private productService:ProductService, private shopService:ShopService) { }

  ngOnInit() { 
    console.log("initiated filters")
  }

  ngOnDestroy(): void {
    this.unsubscribe();

  console.log("destroying")
};

unsubscribe(){
  
}

  

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.


      this.productService.currentPageNumber.pipe()
      .subscribe(result => {
        this.pageNumber = result;
      });
      
        this.productService.currentfiltersAvailable.pipe()
        .subscribe(result => {
          this.resultSize.push(result);    
      })

      setTimeout(() => {
        this.productService.currentDefaultFilters.pipe(take(2))
      
        .subscribe(result => {
            //console.log(result);
            this.Selectedoptions = result;
          // console.log(this.Selectedoptions);
            if(this.resultSize.length == 0){
              console.log("dont run")
            }
            else{
              this.resultSize.forEach(element => {
                //console.log(element.length);
              for(let i =0 ; i < element.length; i++){
               // console.log(element[i].id);
                for(let j = 0; j < result.length; j++){
                  if(result[j] == element[i].id){
                    console.log(result[j], element[i]);
                    this.allSelectedFilters.push(element[i]);
                  }
                }
              };
            });
            //this.resultSize = [];
            
          }

      });

      this.productService.changeSelectedFilters(this.allSelectedFilters);

      }, 1000)

      




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

    console.log(item.id, this.Selectedoptions);
    this.productService.currentfiltersAvailable.subscribe(result => {
      let resultSize = [];
          resultSize.push(result);
          setTimeout(() => {
            
            if(resultSize.length == 0){
              console.log("dont run")
            }
            else{
              resultSize.forEach(element => {
                console.log(element.length)
              for(let i =0 ; i < element.length; i++){
                console.log(element[i].id);
                for(let j = 0; j < this.Selectedoptions.length; j++){
                  if(result[j] == element[i].id){
                    
                    this.allSelectedFilters.push(element[i]);
                    this.productService.changeSelectedFilters(this.allSelectedFilters);
                  }
                }
              };
            });
        }

         
        }, 1000)

    });

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
