import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";

import { HttpModule } from "@angular/http";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { Apollo, ApolloModule } from "apollo-angular";

import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";

import { GridViewModule } from 'nativescript-grid-view/angular';

import { ProductService } from "./shared/product/product.service";
import { ShopService } from "./shared/shop/shop.service";
import { SelectItemComponent } from "./pages/select-item/select-item.component";
import { SelectionComponent } from "./pages/selection/selection.component";

import { ItemGridlistComponent } from "./shared/components/item-gridlist/item-gridlist.component";
import { LocationListComponent } from "./shared/components/location-list/location-list.component";
import { ItemFiltersComponent } from "./shared/components/item-filters/item-filters.component";



import { AppComponent } from "./app.component";

import {HomeComponent} from "./pages/home/home.component";

const uri = "http://142.93.129.34:4001/my-cafffe-api/";

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpModule,
    NativeScriptHttpClientModule,
    ApolloModule,
    HttpLinkModule,
    GridViewModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  // tslint:disable-next-line:object-literal-sort-keys
  declarations: [
    AppComponent,
    HomeComponent,
    SelectItemComponent,
    ItemGridlistComponent,
    LocationListComponent,
    SelectionComponent,
    ItemFiltersComponent
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
