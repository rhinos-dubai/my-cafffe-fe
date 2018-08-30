"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("nativescript-cardview");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
var shop_service_1 = require("~/shared/services/shop/shop.service");
// import { ProductService } from "~/shared/product/product.service";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, shopService) {
        this.router = router;
        this.shopService = shopService;
        this.filteredShops = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopService.getShopsNearme().subscribe(function (result) {
            _this.locations = result;
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
        tslib_1.__metadata("design:paramtypes", [router_1.Router, shop_service_1.ShopService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXVDO0FBQ3ZDLDBFQUF3RTtBQUN4RSwrREFBaUQ7QUFDakQsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLGdDQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFFNUMsb0VBQWlFO0FBQ2pFLHFFQUFxRTtBQVlyRTtJQUNFLHVCQUFxQixNQUFhLEVBQVUsV0FBdUI7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBR25FLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSGdELENBQUM7SUFLaEUsZ0NBQVEsR0FBZjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hELEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBZFksYUFBYTtRQVR6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFdBQVcsRUFBRSx1QkFBdUI7U0FDckMsQ0FBQztpREFLNEIsZUFBTSxFQUFzQiwwQkFBVztPQUR4RCxhQUFhLENBZ0J6QjtJQUFELG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiO1xucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gQ2FyZFZpZXcpO1xuXG5pbXBvcnQgeyBTaG9wU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9zZXJ2aWNlcy9zaG9wL3Nob3Auc2VydmljZVwiXG4vLyBpbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIHNob3BTZXJ2aWNlOlNob3BTZXJ2aWNlKSB7fVxuXG4gIGxvY2F0aW9ucztcbiAgZmlsdGVyZWRTaG9wcyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNob3BTZXJ2aWNlLmdldFNob3BzTmVhcm1lKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLmxvY2F0aW9ucyA9IHJlc3VsdDtcbiAgICB9KVxuICB9XG5cbiAgcm91dGVUb1NlbGVjdEl0ZW0oKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWxlY3QtaXRlbVwiXSk7XG59XG5cbn1cbiJdfQ==