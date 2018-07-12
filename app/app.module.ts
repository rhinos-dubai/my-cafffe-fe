import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";

import {HomeComponent} from "./pages/home/home.component"

@NgModule({
  imports: [NativeScriptModule,AppRoutingModule],
  declarations: [AppComponent,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
