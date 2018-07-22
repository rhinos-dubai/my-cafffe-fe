import {Component, Input , OnInit} from '@angular/core';
import {Label} from 'ui/label';
import { ShopService } from "~/shared/shop/shop.service";
//import { Shop } from "~/shared/shop/shop"
import { Shop, Query } from '~/shared/types';
import { CardView } from 'nativescript-cardview';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'shop-list-component',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.scss']
})

export class ShopListComponent implements OnInit {
    AllShops: Observable<Shop[]>;
    constructor(private shopService:ShopService) {}

    ngOnInit() { 
        this.AllShops = this.shopService.getAllShops();
        //console.log(this.AllShops);
    }
}
