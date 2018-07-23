import {Component, Input , OnInit} from '@angular/core';
import {Label} from 'ui/label';
import { ProductService } from "~/shared/product/product.service";
import { Product } from "~/shared/types"
import { CardView } from 'nativescript-cardview';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'most-product-component',
    templateUrl: './most-product-group.component.html',
    styleUrls: ['./most-product-group.component.scss']
})

export class MostProductComponent implements OnInit {
    MostOrdered:Observable<Product[]>;
    constructor(private productService:ProductService) {}

    ngOnInit() { 
        this.MostOrdered = this.productService.getAllProducts();
        //console.log(this.MostOrdered);
    }
}
