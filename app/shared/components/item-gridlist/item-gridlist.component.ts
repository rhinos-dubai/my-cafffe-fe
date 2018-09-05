import { Component,Input, OnInit } from '@angular/core';
import { ProductService } from '~/shared/services/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'item-gridlist',
  templateUrl: './item-gridlist.component.html',
  styleUrls: ['./item-gridlist.component.scss']
})
export class ItemGridlistComponent implements OnInit {

  @Input() data: any;

  constructor(private productService:ProductService) { }

  ngOnInit() { }

  getSelectedName(name){
    this.productService.changeSelectedItemName(name);
  }

}
