import {Component, Input , OnInit} from '@angular/core';
import {Label} from 'ui/label';
import { CardView } from 'nativescript-cardview';
import { ProductService } from "~/shared/product/product.service";
import { Product,Category } from '~/shared/types';
import { Observable } from 'rxjs';
@Component({
    moduleId: module.id,
    selector: 'product-builder-component',
    templateUrl: './product-builder.component.html',
    styleUrls: ['./product-builder.component.scss']
})

export class ProductBuilderComponent implements OnInit {
    constructor(private productService:ProductService) {}
    builderText;
    drinks: Observable<Product[]>;
    categories: Observable<Category>;
    @Input()
    builder: string;

     ngOnInit() { 
        //alert(this.builder);
        //this.builderText = this.builder;
        this.categories = this.productService.getCategories(this.builder);
        //console.log(this.drinks);
        //await this.tt();
        console.log(this.categories);
        //console.log(this.builder)

    }

    productID(id){
        alert(id);
    }


}
