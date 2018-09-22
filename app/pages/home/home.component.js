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
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.shopService.changesearchLocationStatus(true);
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.shopService.getShopsNearme().subscribe(function (result) {
                _this.locations = result;
                if (_this.locations) {
                    setTimeout(function () {
                        _this.shopService.changesearchLocationStatus(false);
                    }, 100);
                }
            });
            _this.prodcutServive.getAllProducts().subscribe(function (result) {
                _this.products = result;
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXVDO0FBQ3ZDLHNEQUF5RjtBQUN6RiwwRUFBd0U7QUFDeEUsK0RBQWlEO0FBQ2pELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxnQ0FBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBRTVDLG9FQUFpRTtBQUNqRSw2RUFBMkU7QUFFM0UscUVBQXFFO0FBWXJFO0lBQ0UsdUJBQXFCLE1BQWEsRUFBVSxXQUF1QixFQUFVLGNBQTZCLEVBQVMsZ0JBQWtDO1FBQWhJLFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUdySixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUhrSSxDQUFDO0lBTWxKLGdDQUFRLEdBQWY7UUFDRSxxREFBcUQ7SUFFdkQsQ0FBQztJQUVDLHVDQUFlLEdBQWY7UUFBQSxpQkFvQkM7UUFsQkQsVUFBVSxDQUFDO1lBRVAsS0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUM5QyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7b0JBQ2YsVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFWixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBRSxVQUFBLE1BQU07Z0JBQ2xELEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVQsQ0FBQztJQUVILHlDQUFpQixHQUFqQjtRQUNFLHlDQUF5QztRQUV2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDNUMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNULENBQUM7SUE1Q1ksYUFBYTtRQVR6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFdBQVcsRUFBRSx1QkFBdUI7U0FDckMsQ0FBQztpREFLNEIsZUFBTSxFQUFzQiwwQkFBVyxFQUF5QixnQ0FBYyxFQUEyQix5QkFBZ0I7T0FEMUksYUFBYSxDQThDekI7SUFBRCxvQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCI7XG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiBDYXJkVmlldyk7XG5cbmltcG9ydCB7IFNob3BTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3Nob3Avc2hvcC5zZXJ2aWNlXCJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHNldCA9IFJlZmxlY3Quc2V0O1xuLy8gaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBzaG9wU2VydmljZTpTaG9wU2VydmljZSwgcHJpdmF0ZSBwcm9kY3V0U2Vydml2ZTpQcm9kdWN0U2VydmljZSxwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbG9jYXRpb25zO1xuICBmaWx0ZXJlZFNob3BzID0gZmFsc2U7XG4gIHByb2R1Y3RzO1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLnNob3BTZXJ2aWNlLmNoYW5nZXNlYXJjaExvY2F0aW9uU3RhdHVzKHRydWUpO1xuXG4gIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIHRoaXMuc2hvcFNlcnZpY2UuZ2V0U2hvcHNOZWFybWUoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25zID0gcmVzdWx0O1xuICAgICAgICAgICAgaWYodGhpcy5sb2NhdGlvbnMpe1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9wU2VydmljZS5jaGFuZ2VzZWFyY2hMb2NhdGlvblN0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2RjdXRTZXJ2aXZlLmdldEFsbFByb2R1Y3RzKCkuc3Vic2NyaWJlKCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG5cbiAgICB9LCAxMDAwKTtcblxuICAgIH1cblxuICByb3V0ZVRvU2VsZWN0SXRlbSgpe1xuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNlbGVjdC1pdGVtXCJdKTtcblxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnc2VsZWN0LWl0ZW0nXSwge1xuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZU91dFwiXG4gICAgICAgICAgfVxuICAgICAgfSk7XG59XG5cbn1cbiJdfQ==