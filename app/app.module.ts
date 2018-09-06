import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";

import { HttpModule } from "@angular/http";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { Apollo, ApolloModule } from "apollo-angular";

import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";

import { GridViewModule } from 'nativescript-grid-view/angular';

import { ProductService } from "./shared/services/product/product.service";
import { ShopService } from "./shared/services/shop/shop.service";
import { SelectItemComponent } from "./pages/select-item/select-item.component";
import { SelectionComponent } from "./pages/selection/selection.component";
import { ConfirmOrderComponent } from "./pages/confirm-order/confirm-order.component";
import { ShopComponent } from "./pages/shop/shop.component";

import { ItemGridlistComponent } from "./shared/components/item-gridlist/item-gridlist.component";
import { LocationListComponent } from "./shared/components/location-list/location-list.component";
import { ItemFiltersComponent } from "./shared/components/item-filters/item-filters.component";
import { ItemSwiperComponent } from "./shared/components/item-swiper/item-swiper.component";



import { AppComponent } from "./app.component";

import {HomeComponent} from "./pages/home/home.component";
import {ActionBarComponent} from '~/shared/components/action-bar/action-bar.component';

const uri = "http://142.93.129.34:4000/my-cafffe-graphql-api";

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
    ConfirmOrderComponent,
    ItemGridlistComponent,
    LocationListComponent,
    SelectionComponent,
    ItemFiltersComponent,
    ItemSwiperComponent,
<<<<<<< HEAD
    ShopComponent
=======
    ActionBarComponent
>>>>>>> a39239b2daaf59818fcd4b65a39a111496654f6c
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
