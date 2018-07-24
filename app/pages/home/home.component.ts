import { AfterViewInit, Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "nativescript-cardview";
registerElement("CardView", () => CardView);
// import {Apollo } from "apollo-angular";
import { Animation, AnimationDefinition } from "ui/animation";
import { View } from "ui/core/view";
import { AnimationCurve } from "ui/enums";
import { Page } from "ui/page";

let view1: View;
let view2: View;

@Component({
  moduleId: module.id,
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})

export class HomeComponent implements  AfterViewInit, OnInit {
  // tslint:disable-next-line:variable-name
  public _mainContentText: string;
  public show: boolean = false;
  public selectedProduct: any;
  constructor(private page: Page ) {}

  public ngAfterViewInit() {

    view1 = this.page.getViewById("view1");
    view2 = this.page.getViewById<View>("view2");
   }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
  get mainContentText() {
    return this._mainContentText;
  }

  set mainContentText(value: string) {
      this._mainContentText = value;
  }

  public openDrawer() {
      // this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
      // this.drawer.closeDrawer();
  }

  public animateForDrink(product) {
    this.show = true;
    const definitions = new Array<AnimationDefinition>();
    const a1: AnimationDefinition = {
        curve: AnimationCurve.easeIn,
        duration: 200,
        target: view1,
        translate: { x: 500, y: 0},
    };
    definitions.push(a1);

    const a2: AnimationDefinition = {
        curve: AnimationCurve.easeIn,
        duration: 200,
        target: view2,
        translate: { x: 500, y: 0},
    };
    definitions.push(a2);

    const animationSet = new Animation(definitions);

    animationSet.play().then(() => {
        // console.log("Animation finished");
    })
        .catch((e) => {
           // console.log(e.message);
        });

       // this.hideItems();
    this.selectedProduct = product;
    }

    public animateForEat(product) {
        this.show = true;
       // console.log("GO Away");
        const definitions = new Array<AnimationDefinition>();
        const a1: AnimationDefinition = {
            curve: AnimationCurve.easeIn,
            duration: 200,
            target: view1,
            translate: { x: 500, y: 0},
        };
        definitions.push(a1);
        const a2: AnimationDefinition = {
            curve: AnimationCurve.easeIn,
            duration: 200,
            target: view2,
            translate: { x: 500, y: 0},
        };
        definitions.push(a2);

        const animationSet = new Animation(definitions);

        animationSet.play().then(() => {
          //  console.log("Animation finished");
        })
            // tslint:disable-next-line:no-empty
            .catch((e) => {

            });

           // this.hideItems();
        this.selectedProduct = product;

        }

    public hideItems() {
        setTimeout(() => {
            this.show = !this.show;
            // this.selectedProduct = item;
            // console.log(this.show);
            }, 100);
    }

    public closeAnimation() {
        // console.log("ComeBack");
        const definitions = new Array<AnimationDefinition>();
        const a1: AnimationDefinition = {
            curve: AnimationCurve.easeInOut,
            duration: 200,
            target: view1,
            translate: { x: 0, y: 0},
        };
        definitions.push(a1);

        const a2: AnimationDefinition = {
            curve: AnimationCurve.easeInOut,
            duration: 200,
            target: view2,
            translate: { x: 0, y: 0},
        };
        definitions.push(a2);

        const animationSet = new Animation(definitions);

        animationSet.play().then(() => {
           // console.log("Animation finished");
        })
            .catch((e) => {
                // console.log(e.message);
            });

        this.hideItems();
    }

}
