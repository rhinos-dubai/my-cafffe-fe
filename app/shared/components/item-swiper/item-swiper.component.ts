import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { ProductService } from '~/shared/services/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'item-swiper',
  templateUrl: './item-swiper.component.html',
  styleUrls: ['./item-swiper.component.scss']
})
export class ItemSwiperComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router,private routerExtensions: RouterExtensions) {
   }
  @Input() data;
  icons = [];
  products = this.productService.currentSwipeProducts;
  viewProducts = []
  productsAvailable = []

  ngOnInit() {
   }

   ngAfterViewInit() {
     //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
     //Add 'implements AfterViewInit' to the class.
     this.products.subscribe(result => {
       result.forEach(element => {
         this.viewProducts.push(element);
       });
       this.viewProducts.forEach(element => {
        this.icons.push(String.fromCharCode(parseInt( element['icon'] , 16)));
        });
     });    
   }

  getSelectedName(name, id){
    this.productService.changeSelectedItemName(name);
    // console.log('ID is:' +id);
  //    temporary get id for Selection component design

      this.routerExtensions.navigate(['/selection',id], {
          transition: {
              name: "slideLeft",
              duration: 300,
              curve: "easeOut"
          }
      });
  }

}
