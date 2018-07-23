import {Component, Input , OnInit, AfterViewInit} from '@angular/core';
import {Label} from 'ui/label';
import { CardView } from 'nativescript-cardview';
import { ProductService } from "~/shared/product/product.service";
import { ShopService } from "~/shared/shop/shop.service"
import { Product,Category,Shop } from '~/shared/types';
import { Observable } from 'rxjs';
import {AnimationCurve} from "ui/enums";
import { Animation, AnimationDefinition } from "ui/animation";
import { View } from "ui/core/view";
import { Page } from "ui/page";
import { StackLayout } from '../../../../node_modules/tns-core-modules/ui/layouts/stack-layout/stack-layout';

let viewDrinks: View;

@Component({
    moduleId: module.id,
    selector: 'product-builder-component',
    templateUrl: './product-builder.component.html',
    styleUrls: ['./product-builder.component.scss']
})

export class ProductBuilderComponent implements AfterViewInit, OnInit {
    constructor(private productService:ProductService, private shopService:ShopService, private page: Page) {}
    builderText;
    drinks: Observable<Product[]>;
    categories: Observable<Category>;
    product:Observable<Product>;
    generic_property_id;
    generic_shop;
    shops:Observable<Shop[]>
    @Input()
    builder: string;

     ngOnInit() { 
        //alert(this.builder);
        //this.builderText = this.builder;
        this.categories = this.productService.getCategories(this.builder);
        //console.log(this.drinks);
        //await this.tt();
        //console.log(this.categories);
        //console.log(this.builder)

    }

    ngAfterViewInit() {

    }

    productID(id){
        //this.ngAfterViewInit();
        console.log(id);
        this.product = this.productService.getProduct(id);
        
    }

    propertyID(id,shop){
        //console.log(id);
        // console.log(shop);
        this.generic_property_id = id;
        console.log(this.generic_property_id);

        //this.generic_shop = shop;
        this.shops = this.shopService.getShopsHavingProduct();
    }


}
