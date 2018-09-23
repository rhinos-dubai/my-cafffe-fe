import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '~/shared/services/shop/shop.service';
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Image } from 'tns-core-modules/ui/image';
import { View } from 'tns-core-modules/ui/core/view';
import { Page } from "tns-core-modules/ui/page";
import { screen } from 'tns-core-modules/platform';

@Component({
  moduleId: module.id,
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private route: ActivatedRoute, private shopService:ShopService, private _page: Page) { }

  id: number;
  shop: Object = {};
  shopImageProperty: Object;
  shopCover;
  products;
  product: Array<any> = [];
  ngOnInit() { 
  }

  ngAfterViewInit(){
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log("Shop ID: ", this.id)
      this.shopService.getShop(this.id).subscribe(result => {
        this.shop = result;
        // this.shopImageProperty = JSON.parse(result['image'])
        this.shopCover = result['image'].secure_url;
        // console.log(this.shopCover)
        this.products = result['products'];
        this.products.forEach(element => {
          this.product.push(element.product);
        });
        console.log(this.product);
      })
    });
  }

  onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
    // If the header content is still visiible
    // console.log(scrollView.verticalOffset);
    if (scrollView.verticalOffset < 120) {
        const offset = scrollView.verticalOffset / 2;
        if (scrollView.ios) {
            // iOS adjust the position with an animation to create a smother scrolling effect. 
            topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
        } else {
            // Android, animations are jerky so instead just adjust the position without animation.
            topView.translateY = Math.floor(offset);
        }
    }
}

}
