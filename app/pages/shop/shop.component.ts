import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '~/shared/services/shop/shop.service';

@Component({
  moduleId: module.id,
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private route: ActivatedRoute, private shopService:ShopService) { }

  id: number;
  shop: Object = {};
  shopImageProperty: Object;
  shopCover;
  products;
  product: Array<any> = [];
  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.shopService.getShop(this.id).subscribe(result => {
        this.shop = result;
        this.shopImageProperty = JSON.parse(result['image'])
        this.shopCover = this.shopImageProperty['secure_url'];
        // console.log(this.shopCover)
        this.products = result['products'];
        this.products.forEach(element => {
          this.product.push(element.product);
        });
        console.log(this.product);
      })
    });
  }

}
