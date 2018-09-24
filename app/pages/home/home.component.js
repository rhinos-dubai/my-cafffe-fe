"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("nativescript-cardview");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
var shop_service_1 = require("~/shared/services/shop/shop.service");
var product_service_1 = require("~/shared/services/product/product.service");
// import { ProductService } from "~/shared/product/product.service";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, shopService, prodcutServive, routerExtensions) {
        this.router = router;
        this.shopService = shopService;
        this.prodcutServive = prodcutServive;
        this.routerExtensions = routerExtensions;
        this.filteredShops = false;
        this.icons = [];
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.shopService.getShopsNearme().subscribe(function (result) {
                _this.locations = result;
            });
            _this.prodcutServive.getAllProducts().subscribe(function (result) {
                _this.products = result;
                _this.prodcutServive.changeSwipeProducts(result);
            });
            console.log(_this.products);
        }, 1000);
    };
    HomeComponent.prototype.routeToSelectItem = function () {
        // this.router.navigate(["select-item"]);
        this.routerExtensions.navigate(['select-item'], {
            transition: {
                name: "slideLeft",
                duration: 300,
                curve: "easeOut"
            }
        });
    };
    HomeComponent.prototype.routeToShopPage = function (shop) {
        console.log(shop);
        this.routerExtensions.navigate(['shop', shop.id], {
            transition: {
                name: "slideLeft",
                duration: 300,
                curve: "easeOut"
            }
        });
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-home",
            styleUrls: ["./home.component.scss"],
            templateUrl: "./home.component.html",
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, shop_service_1.ShopService, product_service_1.ProductService, router_2.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXVDO0FBQ3ZDLHNEQUF5RjtBQUN6RiwwRUFBd0U7QUFDeEUsK0RBQWlEO0FBQ2pELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxnQ0FBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBRTVDLG9FQUFpRTtBQUNqRSw2RUFBMkU7QUFFM0UscUVBQXFFO0FBWXJFO0lBRUUsdUJBQXFCLE1BQWEsRUFBVSxXQUF1QixFQUFVLGNBQTZCLEVBQVMsZ0JBQWtDO1FBQWhJLFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUdySixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixVQUFLLEdBQVEsRUFBRSxDQUFDO0lBTHdJLENBQUM7SUFPbEosZ0NBQVEsR0FBZixjQUFxQixDQUFDO0lBRXBCLHVDQUFlLEdBQWY7UUFBQSxpQkFpQkM7UUFmRCxVQUFVLENBQUM7WUFFUCxLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQzlDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQSxNQUFNO2dCQUNsRCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztnQkFDdkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVULENBQUM7SUFFSCx5Q0FBaUIsR0FBakI7UUFDRSx5Q0FBeUM7UUFFdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUcsdUNBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDOUMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuRFEsYUFBYTtRQVR6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFdBQVcsRUFBRSx1QkFBdUI7U0FDckMsQ0FBQztpREFNNEIsZUFBTSxFQUFzQiwwQkFBVyxFQUF5QixnQ0FBYyxFQUEyQix5QkFBZ0I7T0FGMUksYUFBYSxDQXFEekI7SUFBRCxvQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCI7XG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiBDYXJkVmlldyk7XG5cbmltcG9ydCB7IFNob3BTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3Nob3Avc2hvcC5zZXJ2aWNlXCJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHNldCA9IFJlZmxlY3Quc2V0O1xuLy8gaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBzaG9wU2VydmljZTpTaG9wU2VydmljZSwgcHJpdmF0ZSBwcm9kY3V0U2Vydml2ZTpQcm9kdWN0U2VydmljZSxwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbG9jYXRpb25zO1xuICBmaWx0ZXJlZFNob3BzID0gZmFsc2U7XG4gIHByb2R1Y3RzO1xuICBpY29uczogYW55ID0gW107XG5cbiAgcHVibGljIG5nT25Jbml0KCkgeyAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgdGhpcy5zaG9wU2VydmljZS5nZXRTaG9wc05lYXJtZSgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSByZXN1bHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZGN1dFNlcnZpdmUuZ2V0QWxsUHJvZHVjdHMoKS5zdWJzY3JpYmUoIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5wcm9kY3V0U2Vydml2ZS5jaGFuZ2VTd2lwZVByb2R1Y3RzKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgfSwgMTAwMCk7XG5cbiAgICB9XG5cbiAgcm91dGVUb1NlbGVjdEl0ZW0oKXtcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWxlY3QtaXRlbVwiXSk7XG5cbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ3NlbGVjdC1pdGVtJ10sIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVMZWZ0XCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VPdXRcIlxuICAgICAgICAgIH1cbiAgICAgIH0pO1xufVxuXG4gICAgcm91dGVUb1Nob3BQYWdlKHNob3Ape1xuICAgICAgICBjb25zb2xlLmxvZyhzaG9wKVxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydzaG9wJywgc2hvcC5pZF0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19