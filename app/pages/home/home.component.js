"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("nativescript-cardview");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
var shop_service_1 = require("~/shared/services/shop/shop.service");
var product_service_1 = require("~/shared/services/product/product.service");
// import { ProductService } from "~/shared/product/product.service";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, shopService, prodcutServive) {
        this.router = router;
        this.shopService = shopService;
        this.prodcutServive = prodcutServive;
        this.filteredShops = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopService.changesearchLocationStatus(true);
        this.shopService.getShopsNearme().subscribe(function (result) {
            _this.locations = result;
            if (_this.locations) {
                setTimeout(function () {
                    _this.shopService.changesearchLocationStatus(false);
                }, 100);
            }
        });
        this.prodcutServive.getAllProducts().subscribe(function (result) {
            _this.products = result;
        });
    };
    HomeComponent.prototype.routeToSelectItem = function () {
        this.router.navigate(["select-item"]);
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-home",
            styleUrls: ["./home.component.scss"],
            templateUrl: "./home.component.html",
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, shop_service_1.ShopService, product_service_1.ProductService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXVDO0FBQ3ZDLDBFQUF3RTtBQUN4RSwrREFBaUQ7QUFDakQsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLGdDQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFFNUMsb0VBQWlFO0FBQ2pFLDZFQUEyRTtBQUMzRSxxRUFBcUU7QUFZckU7SUFDRSx1QkFBcUIsTUFBYSxFQUFVLFdBQXVCLEVBQVUsY0FBNkI7UUFBckYsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFHMUcsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFIdUYsQ0FBQztJQU12RyxnQ0FBUSxHQUFmO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDakIsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVWLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFFLFVBQUEsTUFBTTtZQUNwRCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQTFCWSxhQUFhO1FBVHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHVCQUF1QjtTQUNyQyxDQUFDO2lEQUs0QixlQUFNLEVBQXNCLDBCQUFXLEVBQXlCLGdDQUFjO09BRC9GLGFBQWEsQ0E0QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IENhcmRWaWV3KTtcclxuXHJcbmltcG9ydCB7IFNob3BTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3Nob3Avc2hvcC5zZXJ2aWNlXCJcclxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5zY3NzXCJdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBzaG9wU2VydmljZTpTaG9wU2VydmljZSwgcHJpdmF0ZSBwcm9kY3V0U2Vydml2ZTpQcm9kdWN0U2VydmljZSkge31cclxuXHJcbiAgbG9jYXRpb25zO1xyXG4gIGZpbHRlcmVkU2hvcHMgPSBmYWxzZTtcclxuICBwcm9kdWN0cztcclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zaG9wU2VydmljZS5jaGFuZ2VzZWFyY2hMb2NhdGlvblN0YXR1cyh0cnVlKTtcclxuICAgIHRoaXMuc2hvcFNlcnZpY2UuZ2V0U2hvcHNOZWFybWUoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgdGhpcy5sb2NhdGlvbnMgPSByZXN1bHQ7XHJcbiAgICAgIGlmKHRoaXMubG9jYXRpb25zKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57ICAgIC8vPDw8LS0tICAgIHVzaW5nICgpPT4gc3ludGF4XHJcbiAgICAgICAgICB0aGlzLnNob3BTZXJ2aWNlLmNoYW5nZXNlYXJjaExvY2F0aW9uU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucHJvZGN1dFNlcnZpdmUuZ2V0QWxsUHJvZHVjdHMoKS5zdWJzY3JpYmUoIHJlc3VsdCA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSByZXN1bHQ7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcm91dGVUb1NlbGVjdEl0ZW0oKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNlbGVjdC1pdGVtXCJdKTtcclxufVxyXG5cclxufVxyXG4iXX0=