import { Component, OnInit } from '@angular/core';
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { WebView, LoadEventData } from "ui/web-view";
import {Page, View} from "ui/page";
import { registerElement } from 'nativescript-angular';
import { LottieView } from 'nativescript-lottie';

registerElement('LottieView', () => LottieView);

// let webView : View;




@Component({
    moduleId: module.id,
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

    public loop: boolean = false;
    public src: string;
    public autoPlay: boolean = true;
    public animations: Array<string>;
    public progress: number = 0;

    private _lottieView: LottieView;


    // public webViewSrc = '';

    constructor(private page: Page,private routerExtensions: RouterExtensions)
    {
        this.page.actionBarHidden = true;
        this.animations = ['Mobilo/A.json', 'Mobilo/D.json', 'Mobilo/N.json', 'Mobilo/S.json', 'Mobilo/data.json'];
        this.src = this.animations[4];
    }


    ngOnInit() {

        setTimeout(() => {
            this._lottieView.progress=1;

            this.routerExtensions.navigate(["/home"], {
                transition: {
                    name: "slideLeft",
                    duration: 300,
                    curve: "easeIn"
                }
            });
        }, 9000);

        // setTimeout(() => {
        //     this.routerExtensions.navigate(["/home"], {
        //         transition: {
        //             name: "slideLeft",
        //             duration: 300,
        //             curve: "linear"
        //         }
        //     });
        // }, 5000);

        // setTimeout(() => {
        //     this._lottieView.progress = .7;
        // }, 3000);




        // webView = this.page.getViewById("webViewID");

    }

    lottieViewLoaded(event) {
        console.dir( event);
        this._lottieView = <LottieView>event.object;

    }

    // onLoadStarted() {
    //     let webView :WebView = <WebView>this.page.getViewById('webViewID');
    //     if(webView.android) { // in IOS android will be undefined
    //         webView.android.getSettings().setBuiltInZoomControls(false);
    //     }
    // }
    //
    // onLoadFinished() {
    //     setTimeout(() => {
    //         this.routerExtensions.navigate(["/home"], {
    //             transition: {
    //                 name: "slideLeft",
    //                 duration: 500,
    //                 curve: "linear"
    //             }
    //         });
    //     }, 5000);
    // }



}
