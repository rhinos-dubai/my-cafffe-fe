import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '~/shared/services/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'item-swiper',
  templateUrl: './item-swiper.component.html',
  styleUrls: ['./item-swiper.component.scss']
})
export class ItemSwiperComponent implements OnInit {

  constructor(private productService:ProductService) { }
  @Input() data: any;

  ngOnInit() { }

  getSelectedName(name){
    this.productService.changeSelectedItemName(name);
  }

}
