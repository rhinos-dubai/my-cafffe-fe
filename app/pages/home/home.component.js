"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("nativescript-cardview");
element_registry_1.registerElement('CardView', function () { return nativescript_cardview_1.CardView; });
var page_1 = require("ui/page");
var enums_1 = require("ui/enums");
var animation_1 = require("ui/animation");
var apollo_angular_1 = require("apollo-angular");
var view1;
var view2;
var HomeComponent = /** @class */ (function () {
    //show = boolean =false;
    function HomeComponent(page, apollo) {
        this.page = page;
        this.apollo = apollo;
        this.show = false;
        this.outofView = false;
    }
    //@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    //private drawer: RadSideDrawer;
    HomeComponent.prototype.ngAfterViewInit = function () {
        //this.drawer = this.drawerComponent.sideDrawer;
        //this._changeDetectionRef.detectChanges();
        view1 = this.page.getViewById("view1");
        view2 = this.page.getViewById("view2");
        console.log(view1);
    };
    HomeComponent.prototype.ngOnInit = function () {
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
    };
    Object.defineProperty(HomeComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.openDrawer = function () {
        //this.drawer.showDrawer();
    };
    HomeComponent.prototype.onCloseDrawerTap = function () {
        //this.drawer.closeDrawer();
    };
    /*public animate(target: View) {
      console.log(target);
      let duration = 900;
      target.animate({ translate: { x: 300, y: 0},curve: AnimationCurve.easeIn, duration: duration });
      setTimeout(() => {
      this.show = false;
      }, 1500);
  
    }*/
    HomeComponent.prototype.animateForDrink = function (product) {
        //console.log("GO Away");
        this.show = true;
        var definitions = new Array();
        var a1 = {
            target: view1,
            translate: { x: 500, y: 0 }, curve: enums_1.AnimationCurve.easeIn,
            duration: 200
        };
        definitions.push(a1);
        var a2 = {
            target: view2,
            translate: { x: 500, y: 0 }, curve: enums_1.AnimationCurve.easeIn,
            duration: 200
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            //console.log("Animation finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
        //this.hideItems();
        this.selectedProduct = product;
    };
    HomeComponent.prototype.animateForEat = function (product) {
        this.show = true;
        // console.log("GO Away");
        var definitions = new Array();
        var a1 = {
            target: view1,
            translate: { x: 500, y: 0 }, curve: enums_1.AnimationCurve.easeIn,
            duration: 200
        };
        definitions.push(a1);
        var a2 = {
            target: view2,
            translate: { x: 500, y: 0 }, curve: enums_1.AnimationCurve.easeIn,
            duration: 200
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            //  console.log("Animation finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
        //this.hideItems();
        this.selectedProduct = product;
    };
    HomeComponent.prototype.hideItems = function () {
        var _this = this;
        setTimeout(function () {
            _this.show = !_this.show;
            //this.selectedProduct = item;
            //console.log(this.show);
        }, 100);
    };
    HomeComponent.prototype.closeAnimation = function () {
        //console.log("ComeBack");
        var definitions = new Array();
        var a1 = {
            target: view1,
            translate: { x: 0, y: 0 }, curve: enums_1.AnimationCurve.easeInOut,
            duration: 200
        };
        definitions.push(a1);
        var a2 = {
            target: view2,
            translate: { x: 0, y: 0 }, curve: enums_1.AnimationCurve.easeInOut,
            duration: 200
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            // console.log("Animation finished");
        })
            .catch(function (e) {
            console.log(e.message);
        });
        this.hideItems();
    };
    HomeComponent = __decorate([
        core_1.Component({
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
        }),
        __metadata("design:paramtypes", [page_1.Page, apollo_angular_1.Apollo])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRjtBQUkvRiwwRUFBd0U7QUFDeEUsK0RBQWlEO0FBQ2pELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxnQ0FBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBRzVDLGdDQUErQjtBQUsvQixrQ0FBd0M7QUFDeEMsMENBQThEO0FBRTlELGlEQUE4RDtBQWM5RCxJQUFJLEtBQVcsQ0FBQztBQUNoQixJQUFJLEtBQVcsQ0FBQztBQXNCaEI7SUFPRSx3QkFBd0I7SUFLeEIsdUJBQW9CLElBQVUsRUFBUyxNQUFjO1FBQWpDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVnJELFNBQUksR0FBWSxLQUFLLENBQUM7UUFJdEIsY0FBUyxHQUFXLEtBQUssQ0FBQztJQVExQixDQUFDO0lBQ0Qsb0ZBQW9GO0lBQ3BGLGdDQUFnQztJQUVoQyx1Q0FBZSxHQUFmO1FBQ0UsZ0RBQWdEO1FBQ2hELDJDQUEyQztRQUMzQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFPLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVGLGdDQUFRLEdBQVI7UUFFRSx3VEFBd1Q7UUFDeFQ7Ozs7Ozs7Ozs7Ozs7OzRDQWNvQztRQUVoQywwQkFBMEI7UUFDMUIsZ0VBQWdFO0lBRXRFLENBQUM7SUFJRCxzQkFBSSwwQ0FBZTthQUFuQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzthQUVELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxD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RSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDOzs7Ozs7Ozs7Ozs7Z0JBWUk7WUFDSixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQWMwQixXQUFJLEVBQWlCLHVCQUFNO09BWjFDLGFBQWEsQ0FtTHpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5MRCxJQW1MQztBQW5MWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IEFic29sdXRlTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xuXG5pbXBvcnQge0Fwb2xsb01vZHVsZSwgQXBvbGxvLCBRdWVyeVJlZn0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHtIdHRwTGlua01vZHVsZSwgSHR0cExpbmt9IGZyb20gJ2Fwb2xsby1hbmd1bGFyLWxpbmstaHR0cCc7XG5pbXBvcnQge0luTWVtb3J5Q2FjaGV9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8vaW1wb3J0IHsgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYXAgIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5cbmltcG9ydCB7IFByb2R1Y3QsIFF1ZXJ5IH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMnO1xuXG5sZXQgdmlldzE6IFZpZXc7XG5sZXQgdmlldzI6IFZpZXc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAvKnRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkJsb2dcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cInBvc3RzIHwgYXN5bmNcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosIGF1dG9cIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIwXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M9XCJ0YXAtdGFyZ2V0XCIgKHRhcCk9XCJ1cHZvdGUoaXRlbS5pZCwgaXRlbS52b3RlcylcIj5cbiAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XCJpdGVtLnRpdGxlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInZvdGVzXCIgW3RleHRdPVwiZGlzcGxheVZvdGVzKGl0ZW0pXCI+PC9MYWJlbD5cbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvTGlzdFZpZXc+XG4gIGAsKi9cbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzICBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcbiAgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3N0c1JlZjogUXVlcnlSZWY8UXVlcnk+O1xuICBwb3N0czogT2JzZXJ2YWJsZTxQcm9kdWN0W10+O1xuICBzZWxlY3RlZFByb2R1Y3Q6c3RyaW5nO1xuICBvdXRvZlZpZXc6Ym9vbGVhbiA9IGZhbHNlO1xuICAvL3Nob3cgPSBib29sZWFuID1mYWxzZTtcblxuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UscHJpdmF0ZSBhcG9sbG86IEFwb2xsbyApIHsgXG4gICAgICBcbiAgfVxuICAvL0BWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgLy9wcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy90aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgLy90aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHZpZXcxID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwidmlldzFcIik7XG4gICAgdmlldzIgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJ2aWV3MlwiKTtcbiAgICBjb25zb2xlLmxvZyh2aWV3MSk7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7IFxuXG4gICAgLy90aGlzLl9tYWluQ29udGVudFRleHQgPSBcIlNpZGVEcmF3ZXIgZm9yIE5hdGl2ZVNjcmlwdCBjYW4gYmUgZWFzaWx5IHNldHVwIGluIHRoZSBIVE1MIGRlZmluaXRpb24gb2YgeW91ciBwYWdlIGJ5IGRlZmluaW5nIHRrRHJhd2VyQ29udGVudCBhbmQgdGtNYWluQ29udGVudC4gVGhlIGNvbXBvbmVudCBoYXMgYSBkZWZhdWx0IHRyYW5zaXRpb24gYW5kIHBvc2l0aW9uIGFuZCBhbHNvIGV4cG9zZXMgbm90aWZpY2F0aW9ucyByZWxhdGVkIHRvIGNoYW5nZXMgaW4gaXRzIHN0YXRlLiBTd2lwZSBmcm9tIGxlZnQgdG8gb3BlbiBzaWRlIGRyYXdlci5cIjtcbiAgICAvKnRoaXMucG9zdHNSZWYgPSB0aGlzLmFwb2xsby53YXRjaFF1ZXJ5PFF1ZXJ5Pih7XG4gICAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgICAgcXVlcnkgYWxsUG9zdHMge1xuICAgICAgICAgICAgcG9zdHMge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICB2b3Rlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIH0pO1xuICBcbiAgICAgICAgdGhpcy5wb3N0cyA9IHRoaXMucG9zdHNSZWZcbiAgICAgICAgLnZhbHVlQ2hhbmdlc1xuICAgICAgICAucGlwZShtYXAociA9PiByLmRhdGEucG9zdHMpKTsqL1xuXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wb3N0cyk7XG4gICAgICAgIC8vdGhpcy5wb3N0c1JlZi52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHIgPT4ge2NvbnNvbGUubG9nKHIpfSk7Ki9cbiAgICBcbiAgfVxuXG5cblxuICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYWluQ29udGVudFRleHQ7XG4gIH1cblxuICBzZXQgbWFpbkNvbnRlbnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX21haW5Db250ZW50VGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XG4gICAgICAvL3RoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgLy90aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG5cbiAgLypwdWJsaWMgYW5pbWF0ZSh0YXJnZXQ6IFZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIGxldCBkdXJhdGlvbiA9IDkwMDtcbiAgICB0YXJnZXQuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAzMDAsIHk6IDB9LGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW4sIGR1cmF0aW9uOiBkdXJhdGlvbiB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICB9LCAxNTAwKTtcblxuICB9Ki9cblxuICBhbmltYXRlRm9yRHJpbmsocHJvZHVjdCkge1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJHTyBBd2F5XCIpO1xuICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xuICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgdGFyZ2V0OiB2aWV3MSxcbiAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDUwMCwgeTogMH0sY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbixcbiAgICAgICAgZHVyYXRpb246IDIwMFxuICAgIH07XG4gICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XG5cbiAgICBsZXQgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICAgIHRhcmdldDogdmlldzIsXG4gICAgICAgIHRyYW5zbGF0ZTogeyB4OiA1MDAsIHk6IDB9LGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW4sXG4gICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTIpO1xuXG4gICAgbGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xuXG4gICAgYW5pbWF0aW9uU2V0LnBsYXkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkFuaW1hdGlvbiBmaW5pc2hlZFwiKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgLy90aGlzLmhpZGVJdGVtcygpO1xuICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYW5pbWF0ZUZvckVhdChwcm9kdWN0KSB7XG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICAgLy8gY29uc29sZS5sb2coXCJHTyBBd2F5XCIpO1xuICAgICAgICBsZXQgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXk8QW5pbWF0aW9uRGVmaW5pdGlvbj4oKTtcbiAgICAgICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB2aWV3MSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiA1MDAsIHk6IDB9LGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW4sXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH07XG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuICAgIFxuICAgICAgICBsZXQgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHZpZXcyLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDUwMCwgeTogMH0sY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgfTtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChhMik7XG4gICAgXG4gICAgICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcbiAgICBcbiAgICAgICAgYW5pbWF0aW9uU2V0LnBsYXkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJBbmltYXRpb24gZmluaXNoZWRcIik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgIC8vdGhpcy5oaWRlSXRlbXMoKTtcbiAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICB9XG5cbiAgICBwdWJsaWMgaGlkZUl0ZW1zKCl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvd1xuICAgICAgICAgICAgLy90aGlzLnNlbGVjdGVkUHJvZHVjdCA9IGl0ZW07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc2hvdyk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZUFuaW1hdGlvbigpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29tZUJhY2tcIik7XG4gICAgICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xuICAgICAgICBsZXQgYTE6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHZpZXcxLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDB9LGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXQsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH07XG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuICAgIFxuICAgICAgICBsZXQgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHZpZXcyLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDB9LGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXQsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH07XG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goYTIpO1xuICAgIFxuICAgICAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG4gICAgXG4gICAgICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQW5pbWF0aW9uIGZpbmlzaGVkXCIpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5oaWRlSXRlbXMoKTtcbiAgICB9XG5cbn1cbiJdfQ==