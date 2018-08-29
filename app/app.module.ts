import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";

import { HttpModule } from "@angular/http";


import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { Apollo, ApolloModule } from "apollo-angular";

import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";

import { ProductService } from "./shared/product/product.service";
import { ShopService } from "./shared/shop/shop.service";

import { AppComponent } from "./app.component";

import {HomeComponent} from "./pages/home/home.component";

const uri = "http://192.168.100.147:4001/my-cafffe-api";

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpModule,
    NativeScriptHttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  // tslint:disable-next-line:object-literal-sort-keys
  declarations: [
    AppComponent,
    HomeComponent,
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
