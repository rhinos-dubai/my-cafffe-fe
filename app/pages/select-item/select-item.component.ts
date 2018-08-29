import { Component, OnInit } from '@angular/core';
import { ProductService } from '~/shared/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss']
})
export class SelectItemComponent implements OnInit {

  constructor(private productService:ProductService) { }

  items;

  ngOnInit() { 
    this.productService.getAllProducts().subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

}
