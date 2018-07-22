import {Component, Input , OnInit} from '@angular/core';
import {Label} from 'ui/label';
import { ProductService } from "~/shared/product/product.service";
//import { Product } from "~/shared/product/product"
import { Product, Query ,Category } from '~/shared/types';
import { CardView } from 'nativescript-cardview';
import { Observable } from 'rxjs';
@Component({
    moduleId: module.id,
    selector: 'favourite-product-component',
    /*template: `<StackLayout>                 
    <CardView class="cardStyleShop" margin="05" elevation="0" radius="5" row="0" col="1" [nsRouterLink]="['/home']" *ngFor="let item of AllShops">
    <GridLayout rows="120, auto, auto" columns="*, *" >
        <Image [src]="item.image" stretch="aspectFill" margin="02" colSpan="2" row="0" ></Image>
        <Label [text]="item.name" class="info" textWrap="true" margin="10" row="1" colSpan="2" horizontalAlignment="center" ></Label>
    </GridLayout>
    </CardView>
    </StackLayout>`*/
    templateUrl: './favourite-product.component.html',
    styleUrls: ['./favourite-product.component.scss']
})

export class FavouriteProductComponent implements OnInit {
    Favitems: Observable<Product[]>;
    constructor(private productService:ProductService) {}

    ngOnInit() { 

         this.Favitems =  this.productService.getAllProducts();
        setTimeout(()=>{
            //console.log(this.Favitems);
        }, 3000)
        //

        //console.log();
    }
}
