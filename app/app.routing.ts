import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {HomeComponent} from "./pages/home/home.component"
import { SelectItemComponent } from "./pages/select-item/select-item.component";
import { SelectionComponent } from "./pages/selection/selection.component";
import { ConfirmOrderComponent } from "./pages/confirm-order/confirm-order.component";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "select-item", component: SelectItemComponent },
    { path: "selection/:id", component: SelectionComponent },
    { path: "confirm-order", component: ConfirmOrderComponent },
    

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }