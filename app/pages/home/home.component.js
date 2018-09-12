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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXVDO0FBQ3ZDLDBFQUF3RTtBQUN4RSwrREFBaUQ7QUFDakQsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLGdDQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFFNUMsb0VBQWlFO0FBQ2pFLDZFQUEyRTtBQUMzRSxxRUFBcUU7QUFZckU7SUFDRSx1QkFBcUIsTUFBYSxFQUFVLFdBQXVCLEVBQVUsY0FBNkI7UUFBckYsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFHMUcsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFIdUYsQ0FBQztJQU12RyxnQ0FBUSxHQUFmO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDakIsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVWLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFFLFVBQUEsTUFBTTtZQUNwRCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQTFCWSxhQUFhO1FBVHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHVCQUF1QjtTQUNyQyxDQUFDO2lEQUs0QixlQUFNLEVBQXNCLDBCQUFXLEVBQXlCLGdDQUFjO09BRC9GLGFBQWEsQ0E0QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCI7XG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiBDYXJkVmlldyk7XG5cbmltcG9ydCB7IFNob3BTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3Nob3Avc2hvcC5zZXJ2aWNlXCJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwifi9zaGFyZWQvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBzaG9wU2VydmljZTpTaG9wU2VydmljZSwgcHJpdmF0ZSBwcm9kY3V0U2Vydml2ZTpQcm9kdWN0U2VydmljZSkge31cblxuICBsb2NhdGlvbnM7XG4gIGZpbHRlcmVkU2hvcHMgPSBmYWxzZTtcbiAgcHJvZHVjdHM7XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2hvcFNlcnZpY2UuY2hhbmdlc2VhcmNoTG9jYXRpb25TdGF0dXModHJ1ZSk7XG4gICAgdGhpcy5zaG9wU2VydmljZS5nZXRTaG9wc05lYXJtZSgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5sb2NhdGlvbnMgPSByZXN1bHQ7XG4gICAgICBpZih0aGlzLmxvY2F0aW9ucyl7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PnsgICAgXG4gICAgICAgICAgdGhpcy5zaG9wU2VydmljZS5jaGFuZ2VzZWFyY2hMb2NhdGlvblN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnByb2RjdXRTZXJ2aXZlLmdldEFsbFByb2R1Y3RzKCkuc3Vic2NyaWJlKCByZXN1bHQgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3VsdDtcbiAgICB9KVxuICB9XG5cbiAgcm91dGVUb1NlbGVjdEl0ZW0oKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWxlY3QtaXRlbVwiXSk7XG59XG5cbn1cbiJdfQ==