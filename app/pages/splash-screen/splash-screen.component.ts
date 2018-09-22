import { Component, OnInit } from '@angular/core';
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { WebView, LoadEventData } from "ui/web-view";
import {Page, View} from "ui/page";

// let webView : View;




@Component({
    moduleId: module.id,
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

    // public webViewSrc = '';

    constructor(private page: Page,private routerExtensions: RouterExtensions)  {this.page.actionBarHidden = true; }

    ngOnInit() {

        setTimeout(() => {
            this.routerExtensions.navigate(["/home"], {
                transition: {
                    name: "slideLeft",
                    duration: 300,
                    curve: "linear"
                }
            });
        }, 1000);

        // setTimeout(() => {
        //     this.routerExtensions.navigate(["/home"], {
        //         transition: {
        //             name: "slideLeft",
        //             duration: 300,
        //             curve: "linear"
        //         }
        //     });
        // }, 5000);




        // webView = this.page.getViewById("webViewID");

    }

    onLoadStarted() {
        let webView :WebView = <WebView>this.page.getViewById('webViewID');
        if(webView.android) { // in IOS android will be undefined
            webView.android.getSettings().setBuiltInZoomControls(false);
        }
    }

    onLoadFinished() {
        setTimeout(() => {
            this.routerExtensions.navigate(["/home"], {
                transition: {
                    name: "slideLeft",
                    duration: 500,
                    curve: "linear"
                }
            });
        }, 5000);
    }



}
