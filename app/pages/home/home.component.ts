import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);
import { View } from "ui/core/view";
import { isAndroid, isIOS, device, screen } from "platform";
import { Page } from "ui/page";
import { Color } from "color";
import { Label } from "ui/label";
import { AbsoluteLayout } from "ui/layouts/absolute-layout";
import * as enums from "ui/enums";
import {AnimationCurve} from "ui/enums";
import { Animation, AnimationDefinition } from "ui/animation";

import {ApolloModule, Apollo, QueryRef} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import { Observable } from 'rxjs';
//import { Subscription} from 'rxjs/operators';
import { map  } from 'rxjs/operators';


import gql from 'graphql-tag';


import { Product, Query } from '~/shared/types';

let view1: View;
let view2: View;

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  /*template: `
    <ActionBar title="Blog" class="action-bar"></ActionBar>
    <ListView [items]="posts | async">
      <ng-template let-item="item">
        <GridLayout columns="*, auto" class="container">
          <StackLayout col="0" orientation="horizontal" class="tap-target" (tap)="upvote(item.id, item.votes)">
            <Label [text]="item.title"></Label>
            <Label class="votes" [text]="displayVotes(item)"></Label>
          </StackLayout>
        </GridLayout>
      </ng-template>
    </ListView>
  `,*/
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements  AfterViewInit, OnInit {
  private _mainContentText: string;
  show: boolean = false;
  postsRef: QueryRef<Query>;
  posts: Observable<Product[]>;
  selectedProduct:string;
  outofView:boolean = false;
  //show = boolean =false;




  constructor(private page: Page,private apollo: Apollo ) { 
      
  }
  //@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  //private drawer: RadSideDrawer;

  ngAfterViewInit() {
    //this.drawer = this.drawerComponent.sideDrawer;
    //this._changeDetectionRef.detectChanges();
    view1 = this.page.getViewById("view1");
    view2 = this.page.getViewById<View>("view2");
    console.log(view1);
   }

  ngOnInit() { 

    //this._mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    /*this.postsRef = this.apollo.watchQuery<Query>({
        query: gql`
          query allPosts {
            posts {
              id
              title
              votes
            }
          }
        `,
      });
  
        this.posts = this.postsRef
        .valueChanges
        .pipe(map(r => r.data.posts));*/

        //console.log(this.posts);
        //this.postsRef.valueChanges.subscribe(r => {console.log(r)});*/
    
  }



  get mainContentText() {
    return this._mainContentText;
  }

  set mainContentText(value: string) {
      this._mainContentText = value;
  }

  public openDrawer() {
      //this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
      //this.drawer.closeDrawer();
  }

  /*public animate(target: View) {
    console.log(target);
    let duration = 900;
    target.animate({ translate: { x: 300, y: 0},curve: AnimationCurve.easeIn, duration: duration });
    setTimeout(() => {
    this.show = false;
    }, 1500);

  }*/

  animateForDrink(product) {

        //console.log("GO Away");
    this.show = true;
    let definitions = new Array<AnimationDefinition>();
    let a1: AnimationDefinition = {
        target: view1,
        translate: { x: 500, y: 0},curve: AnimationCurve.easeIn,
        duration: 200
    };
    definitions.push(a1);

    let a2: AnimationDefinition = {
        target: view2,
        translate: { x: 500, y: 0},curve: AnimationCurve.easeIn,
        duration: 200
    };
    definitions.push(a2);

    let animationSet = new Animation(definitions);

    animationSet.play().then(() => {
        //console.log("Animation finished");
    })
        .catch((e) => {
            console.log(e.message);
        });

       //this.hideItems();
       this.selectedProduct = product;
        
    }

    animateForEat(product) {
        this.show = true;
       // console.log("GO Away");
        let definitions = new Array<AnimationDefinition>();
        let a1: AnimationDefinition = {
            target: view1,
            translate: { x: 500, y: 0},curve: AnimationCurve.easeIn,
            duration: 200
        };
        definitions.push(a1);
    
        let a2: AnimationDefinition = {
            target: view2,
            translate: { x: 500, y: 0},curve: AnimationCurve.easeIn,
            duration: 200
        };
        definitions.push(a2);
    
        let animationSet = new Animation(definitions);
    
        animationSet.play().then(() => {
          //  console.log("Animation finished");
        })
            .catch((e) => {
                console.log(e.message);
            });
    
           //this.hideItems();
           this.selectedProduct = product;
        }

    public hideItems(){
        setTimeout(() => {
            this.show = !this.show
            //this.selectedProduct = item;
            //console.log(this.show);
            }, 100);
    }

    public closeAnimation(){
        //console.log("ComeBack");
        let definitions = new Array<AnimationDefinition>();
        let a1: AnimationDefinition = {
            target: view1,
            translate: { x: 0, y: 0},curve: AnimationCurve.easeInOut,
            duration: 200
        };
        definitions.push(a1);
    
        let a2: AnimationDefinition = {
            target: view2,
            translate: { x: 0, y: 0},curve: AnimationCurve.easeInOut,
            duration: 200
        };
        definitions.push(a2);
    
        let animationSet = new Animation(definitions);
    
        animationSet.play().then(() => {
           // console.log("Animation finished");
        })
            .catch((e) => {
                console.log(e.message);
            });
    
            this.hideItems();
    }

}
