import { Component, OnInit } from '@angular/core';
import {ProductService} from '~/shared/services/product/product.service';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';
import {ShopService} from '~/shared/services/shop/shop.service';

@Component({
    moduleId: module.id,
    selector: 'app-all-ui',
    templateUrl: './all-ui.component.html',
    styleUrls: ['./all-ui.component.scss']
})
export class AllUiComponent implements OnInit {

    constructor(private productService:ProductService, private shopService:ShopService) { }
    locationList = this.shopService.filteredShops;
    genericProperties: any;




    productItems;
    filters: Array<any> = [];
    swiperProducts;
    filteredShops = false;


    ngOnInit() {
        this.productService.getAllProducts().subscribe(result => {
            this.productItems = result;
        });

        this.productService.getAllProducts().subscribe( result => {
            this.swiperProducts = result;
        });

        this.getFilters();
        this.getLocations();
    }


    getFilters(){

        this.productService.getSelectedItem(1,null,0).subscribe(result => {

            this.genericProperties = result.generic_properties;
            this.shopService.changeAvailableShops(result.shops);

            const source = from(this.genericProperties);

            const groupByProperties = source.pipe(
                groupBy(result => result['property_group']),
                // return each item in group as array
                mergeMap(group => group.pipe(toArray()))
            );

            const subscribeToProperties = groupByProperties.subscribe(val => {
                // console.log(val);
                this.filters.push(val);
            });
        });

    }


    getLocations(){
        this.productService.getSelectedItem(1,[],0).subscribe(data => {
            // console.log(data.shops.result);
            this.shopService.changeAvailableShops(data.shops.result);
            if(data.shops == ''){
                console.log("no More Shops");
                this.productService.changePageNumber(1);
            };

            this.shopService.changesearchLocationStatus(false);


            this.filteredShops = true;
        })
    }

}