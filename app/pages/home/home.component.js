"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("nativescript-cardview");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
// import {Apollo } from "apollo-angular";
var animation_1 = require("ui/animation");
var enums_1 = require("ui/enums");
var page_1 = require("ui/page");
var view1;
var view2;
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page) {
        this.page = page;
        this.show = false;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        view1 = this.page.getViewById("view1");
        view2 = this.page.getViewById("view2");
    };
    // tslint:disable-next-line:no-empty
    HomeComponent.prototype.ngOnInit = function () { };
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
        // this.drawer.showDrawer();
    };
    HomeComponent.prototype.onCloseDrawerTap = function () {
        // this.drawer.closeDrawer();
    };
    HomeComponent.prototype.animateForDrink = function (product) {
        this.show = true;
        var definitions = new Array();
        var a1 = {
            curve: enums_1.AnimationCurve.easeIn,
            duration: 200,
            target: view1,
            translate: { x: 500, y: 0 },
        };
        definitions.push(a1);
        var a2 = {
            curve: enums_1.AnimationCurve.easeIn,
            duration: 200,
            target: view2,
            translate: { x: 500, y: 0 },
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            // console.log("Animation finished");
        })
            .catch(function () {
            // console.log(e.message);
        });
        // this.hideItems();
        this.selectedProduct = product;
    };
    HomeComponent.prototype.animateForEat = function (product) {
        this.show = true;
        // console.log("GO Away");
        var definitions = new Array();
        var a1 = {
            curve: enums_1.AnimationCurve.easeIn,
            duration: 200,
            target: view1,
            translate: { x: 500, y: 0 },
        };
        definitions.push(a1);
        var a2 = {
            curve: enums_1.AnimationCurve.easeIn,
            duration: 200,
            target: view2,
            translate: { x: 500, y: 0 },
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            //  console.log("Animation finished");
        })
            .catch(function () {
        });
        // this.hideItems();
        this.selectedProduct = product;
    };
    HomeComponent.prototype.hideItems = function () {
        var _this = this;
        setTimeout(function () {
            _this.show = !_this.show;
            // this.selectedProduct = item;
            // console.log(this.show);
        }, 100);
    };
    HomeComponent.prototype.closeAnimation = function () {
        // console.log("ComeBack");
        var definitions = new Array();
        var a1 = {
            curve: enums_1.AnimationCurve.easeInOut,
            duration: 200,
            target: view1,
            translate: { x: 0, y: 0 },
        };
        definitions.push(a1);
        var a2 = {
            curve: enums_1.AnimationCurve.easeInOut,
            duration: 200,
            target: view2,
            translate: { x: 0, y: 0 },
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            // console.log("Animation finished");
        })
            .catch(function () {
            // console.log(e.message);
        });
        this.hideItems();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-home",
            styleUrls: ["./home.component.scss"],
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwRUFBd0U7QUFDeEUsK0RBQWlEO0FBQ2pELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxnQ0FBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBQzVDLDBDQUEwQztBQUMxQywwQ0FBOEQ7QUFFOUQsa0NBQTBDO0FBQzFDLGdDQUErQjtBQUUvQixJQUFJLEtBQVcsQ0FBQztBQUNoQixJQUFJLEtBQVcsQ0FBQztBQVNoQjtJQUtFLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ2QixTQUFJLEdBQVksS0FBSyxDQUFDO0lBRUssQ0FBQztJQUU1Qix1Q0FBZSxHQUF0QjtRQUVFLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQU8sT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVGLG9DQUFvQztJQUM3QixnQ0FBUSxHQUFmLGNBQW1CLENBQUM7SUFDcEIsc0JBQUksMENBQWU7YUFBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFNTSxrQ0FBVSxHQUFqQjtRQUNJLDRCQUE0QjtJQUNoQyxDQUFDO0lBRU0sd0NBQWdCLEdBQXZCO1FBQ0ksNkJBQTZCO0lBQ2pDLENBQUM7SUFFTSx1Q0FBZSxHQUF0QixVQUF1QixPQUFPO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQU0sV0FBVyxHQUFHLElBQUksS0FB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QUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckIsSUFBTSxFQUFFLEdBQXdCO1lBQzVCLEtBQUssRUFBRSxzQkFBYyxDQUFDLFNBQVM7WUFDL0IsUUFBUSxFQUFFLEdBQUc7WUFDYixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQztTQUMzQixDQUFDO1FBQ0YsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyQixJQUFNLFlBQVksR0FBRyxJQUFJLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEQsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztZQUN0QixxQ0FBcUM7UUFDeEMsQ0FBQyxDQUFDO2FBQ0csS0FBSyxDQUFDO1lBQ0gsMEJBQTBCO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUF0SVEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFdBQVcsRUFBRSx1QkFBdUI7U0FDckMsQ0FBQzt5Q0FPMEIsV0FBSTtPQUxuQixhQUFhLENBd0l6QjtJQUFELG9CQUFDO0NBQUEsQUF4SUQsSUF3SUM7QUF4SVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCI7XG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiBDYXJkVmlldyk7XG4vLyBpbXBvcnQge0Fwb2xsbyB9IGZyb20gXCJhcG9sbG8tYW5ndWxhclwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxubGV0IHZpZXcxOiBWaWV3O1xubGV0IHZpZXcyOiBWaWV3O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyAgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHVibGljIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcbiAgcHVibGljIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkUHJvZHVjdDogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UgKSB7fVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICB2aWV3MSA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcInZpZXcxXCIpO1xuICAgIHZpZXcyID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwidmlldzJcIik7XG4gICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt9XG4gIGdldCBtYWluQ29udGVudFRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21haW5Db250ZW50VGV4dDtcbiAgfVxuXG4gIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgIC8vIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgLy8gdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhbmltYXRlRm9yRHJpbmsocHJvZHVjdCkge1xuICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXk8QW5pbWF0aW9uRGVmaW5pdGlvbj4oKTtcbiAgICBjb25zdCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbixcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgdGFyZ2V0OiB2aWV3MSxcbiAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDUwMCwgeTogMH0sXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGExKTtcblxuICAgIGNvbnN0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluLFxuICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICB0YXJnZXQ6IHZpZXcyLFxuICAgICAgICB0cmFuc2xhdGU6IHsgeDogNTAwLCB5OiAwfSxcbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTIpO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG5cbiAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFuaW1hdGlvbiBmaW5pc2hlZFwiKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgIC8vIHRoaXMuaGlkZUl0ZW1zKCk7XG4gICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBwcm9kdWN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhbmltYXRlRm9yRWF0KHByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdPIEF3YXlcIik7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgICAgIGNvbnN0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICB0YXJnZXQ6IHZpZXcxLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDUwMCwgeTogMH0sXG4gICAgICAgIH07XG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuICAgICAgICBjb25zdCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW4sXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgdGFyZ2V0OiB2aWV3MixcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiA1MDAsIHk6IDB9LFxuICAgICAgICB9O1xuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcblxuICAgICAgICBjb25zdCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcblxuICAgICAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIkFuaW1hdGlvbiBmaW5pc2hlZFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgLy8gdGhpcy5oaWRlSXRlbXMoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBwcm9kdWN0O1xuXG4gICAgICAgIH1cblxuICAgIHB1YmxpYyBoaWRlSXRlbXMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRQcm9kdWN0ID0gaXRlbTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2hvdyk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZUFuaW1hdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJDb21lQmFja1wiKTtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXk8QW5pbWF0aW9uRGVmaW5pdGlvbj4oKTtcbiAgICAgICAgY29uc3QgYTE6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIHRhcmdldDogdmlldzEsXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMH0sXG4gICAgICAgIH07XG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuXG4gICAgICAgIGNvbnN0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICB0YXJnZXQ6IHZpZXcyLFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDB9LFxuICAgICAgICB9O1xuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcblxuICAgICAgICBjb25zdCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcblxuICAgICAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFuaW1hdGlvbiBmaW5pc2hlZFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGlkZUl0ZW1zKCk7XG4gICAgfVxuXG59XG4iXX0=