import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { HttpClientModule } from '@angular/common/http'; 

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { ProductService } from "./shared/product/product.service";
import { AppComponent } from "./app.component";

import {HomeComponent} from "./pages/home/home.component"

@NgModule({
  imports: [NativeScriptModule,AppRoutingModule,NativeScriptUISideDrawerModule,HttpClientModule,NativeScriptUIListViewModule],
  declarations: [AppComponent,HomeComponent],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
