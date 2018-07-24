import {AfterViewInit, Component, Input , OnInit } from "@angular/core";
import { ProductService } from "~/shared/product/product.service";
import { ShopService } from "~/shared/shop/shop.service";
import { Category , Product, Shop } from "~/shared/types";

import { Observable } from "rxjs";

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
    // public generic_property_id;
    // public generic_shop;
    public shops: Observable<Shop[]>;
    @Input()
    public builder: string;

    constructor(private productService: ProductService, private shopService: ShopService) {}

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

    public productID(id) {
        // this.ngAfterViewInit();
        // console.log(id);
        this.product = this.productService.getProduct(id);
    }

    public propertyID(id) {
        // console.log(id);
        // console.log(shop);
        // this.generic_property_id = id;
        // console.log(this.generic_property_id);

        // this.generic_shop = shop;
        this.shops = this.shopService.getShopsHavingProduct(id);
        // console.log(this.shops);
    }
}
