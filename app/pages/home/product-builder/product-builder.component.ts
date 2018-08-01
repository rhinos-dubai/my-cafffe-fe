import {AfterViewInit, Component, Input , OnInit } from "@angular/core";
import { ProductService } from "~/shared/product/product.service";

import { Category , Product, Shop } from "~/shared/types";

import { Observable } from "rxjs";

import { Subscription } from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    selector: "product-builder-component",
    styleUrls: ["./product-builder.component.scss"],
    templateUrl: "./product-builder.component.html",

})

export class ProductBuilderComponent implements AfterViewInit, OnInit {
    public builderText;
    public drinks: Observable<Product[]>;
    public categories: Observable<Category>;
    public product: Observable<Product>;
    public genericProperties;
    public filters: number[] = [];
    // public generic_property_id;
    // public generic_shop;
    public shops: Observable<Shop[]>;
    public subscription: Subscription;
    @Input()
    public builder: string;

    constructor(private productService: ProductService) {}

    public ngOnInit() {
        // alert(this.builder);
        // this.builderText = this.builder;
        this.categories = this.productService.getCategories(this.builder);
        // console.log(this.drinks);
        // await this.tt();
        // console.log(this.categories);
        // console.log(this.builder)

    }

    // tslint:disable-next-line:no-empty
    public ngAfterViewInit() {}
    public getProductInfo(id, filter) {
        this.filters = [];
        // filter.ToNumber();
        // this.ngAfterViewInit();
        // tslint:disable-next-line:no-console
        console.log(`this id recieved ${id}`);
        this.filters.push(filter);
        // tslint:disable-next-line:no-console
        console.log(`this filter ${this.filters}`);
        this.product = this.productService.getProduct(id, this.filters);

        setTimeout(() => {
         this.genericProperties = this.productService.groupItems(id, this.filters);
         // tslint:disable-next-line:no-console
         console.log(this.genericProperties);
         // tslint:disable-next-line:no-console
         // console.log(this.genericProperties);
        }, 1000);
    }

    public propertyID(id) {
        // console.log(id);
        // console.log(shop);
        // this.generic_property_id = id;
        // console.log(this.generic_property_id);
        return id;
        // this.generic_shop = shop;
        // this.shops = this.shopService.getShopsHavingProduct(id);
        // console.log(this.shops);
    }
}
