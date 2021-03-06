import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";

import { HttpModule } from "@angular/http";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { Apollo, ApolloModule } from "apollo-angular";

import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";

import { ProductService } from "./shared/product/product.service";
import { ShopService } from "./shared/shop/shop.service";

import { FavouriteProductComponent } from "./pages/home/favourite-product-group/favourite-product.component";
import { MostProductComponent } from "./pages/home/most-product-group/most-product-group.component";
import { ProductBuilderComponent } from "./pages/home/product-builder/product-builder.component";
import { ShopListComponent } from "./pages/home/shop-list/shop-list.component";

import { AppComponent } from "./app.component";

import {HomeComponent} from "./pages/home/home.component";

const uri = "http://192.168.100.147:4001/my-cafffe-api";

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
    HttpModule,
    NativeScriptUIListViewModule,
    NativeScriptHttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  // tslint:disable-next-line:object-literal-sort-keys
  declarations: [
    AppComponent,
    HomeComponent,
    FavouriteProductComponent,
    MostProductComponent,
    ShopListComponent,
    ProductBuilderComponent,
  ],
  providers: [ProductService, ShopService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    // create Apollo
    apollo.create({
      cache: new InMemoryCache(),
      link: httpLink.create({ uri }),
    });
  }
}
