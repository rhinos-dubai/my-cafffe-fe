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
  products =  this.productService.currentSwipeProducts;
  viewProducts = [];
  icons = [];

  constructor(private productService:ProductService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.products.subscribe(result => {
      result.forEach(element => {
        this.viewProducts.push(element);
      });
    }); 

    setTimeout(() =>{
     this.getIcons();
    }, 200);

  }

  getIcons() {
    console.log("icons hit")
    this.viewProducts.forEach(element => {
      let icon = element['icon'];
      let ico = icon.toString(16);
      this.icons.push(String.fromCharCode(parseInt( element['icon'] , 16)));
      //console.log(icon);
      });

      console.log(this.icons);


   }

   value(i){
     alert(i);
   }

  getSelectedName(name){
    this.productService.changeSelectedItemName(name);
  }

}
