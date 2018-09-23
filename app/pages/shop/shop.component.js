"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shop_service_1 = require("~/shared/services/shop/shop.service");
var page_1 = require("tns-core-modules/ui/page");
var ShopComponent = /** @class */ (function () {
    function ShopComponent(route, shopService, _page) {
        this.route = route;
        this.shopService = shopService;
        this._page = _page;
        this.shop = {};
        this.product = [];
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log("Shop ID: ", _this.id);
            _this.shopService.getShop(_this.id).subscribe(function (result) {
                _this.shop = result;
                // this.shopImageProperty = JSON.parse(result['image'])
                _this.shopCover = result['image'].secure_url;
                // console.log(this.shopCover)
                _this.products = result['products'];
                _this.products.forEach(function (element) {
                    _this.product.push(element.product);
                });
                console.log(_this.product);
            });
        });
    };
    ShopComponent.prototype.onScroll = function (event, scrollView, topView) {
        // If the header content is still visiible
        // console.log(scrollView.verticalOffset);
        if (scrollView.verticalOffset < 120) {
            var offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect. 
                topView.animate({ translate: { x: 0, y: offset } }).then(function () { }, function () { });
            }
            else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    };
    ShopComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-shop',
            templateUrl: './shop.component.html',
            styleUrls: ['./shop.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, shop_service_1.ShopService, page_1.Page])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0Q7QUFDcEQsMENBQWlEO0FBQ2pELG9FQUFrRTtBQUlsRSxpREFBZ0Q7QUFTaEQ7SUFFRSx1QkFBb0IsS0FBcUIsRUFBVSxXQUF1QixFQUFVLEtBQVc7UUFBM0UsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFHL0YsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUlsQixZQUFPLEdBQWUsRUFBRSxDQUFDO0lBUDBFLENBQUM7SUFRcEcsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDaEQsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ25CLHVEQUF1RDtnQkFDdkQsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUM1Qyw4QkFBOEI7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87b0JBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBc0IsRUFBRSxVQUFzQixFQUFFLE9BQWE7UUFDcEUsMENBQTBDO1FBQzFDLDBDQUEwQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLG1GQUFtRjtnQkFDbkYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBUSxDQUFDLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQztZQUNuRixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osdUZBQXVGO2dCQUN2RixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBNUNZLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7aURBRzJCLHVCQUFjLEVBQXNCLDBCQUFXLEVBQWlCLFdBQUk7T0FGcEYsYUFBYSxDQThDekI7SUFBRCxvQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hvcFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9zaG9wL3Nob3Auc2VydmljZSc7XG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3JztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2hvcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaG9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hvcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHNob3BTZXJ2aWNlOlNob3BTZXJ2aWNlLCBwcml2YXRlIF9wYWdlOiBQYWdlKSB7IH1cblxuICBpZDogbnVtYmVyO1xuICBzaG9wOiBPYmplY3QgPSB7fTtcbiAgc2hvcEltYWdlUHJvcGVydHk6IE9iamVjdDtcbiAgc2hvcENvdmVyO1xuICBwcm9kdWN0cztcbiAgcHJvZHVjdDogQXJyYXk8YW55PiA9IFtdO1xuICBuZ09uSW5pdCgpIHsgXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgY29uc29sZS5sb2coXCJTaG9wIElEOiBcIiwgdGhpcy5pZClcbiAgICAgIHRoaXMuc2hvcFNlcnZpY2UuZ2V0U2hvcCh0aGlzLmlkKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zaG9wID0gcmVzdWx0O1xuICAgICAgICAvLyB0aGlzLnNob3BJbWFnZVByb3BlcnR5ID0gSlNPTi5wYXJzZShyZXN1bHRbJ2ltYWdlJ10pXG4gICAgICAgIHRoaXMuc2hvcENvdmVyID0gcmVzdWx0WydpbWFnZSddLnNlY3VyZV91cmw7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2hvcENvdmVyKVxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzdWx0Wydwcm9kdWN0cyddO1xuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0LnB1c2goZWxlbWVudC5wcm9kdWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdCk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgb25TY3JvbGwoZXZlbnQ6IFNjcm9sbEV2ZW50RGF0YSwgc2Nyb2xsVmlldzogU2Nyb2xsVmlldywgdG9wVmlldzogVmlldykge1xuICAgIC8vIElmIHRoZSBoZWFkZXIgY29udGVudCBpcyBzdGlsbCB2aXNpaWJsZVxuICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQpO1xuICAgIGlmIChzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IDwgMTIwKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgLyAyO1xuICAgICAgICBpZiAoc2Nyb2xsVmlldy5pb3MpIHtcbiAgICAgICAgICAgIC8vIGlPUyBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGggYW4gYW5pbWF0aW9uIHRvIGNyZWF0ZSBhIHNtb3RoZXIgc2Nyb2xsaW5nIGVmZmVjdC4gXG4gICAgICAgICAgICB0b3BWaWV3LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMCwgeTogb2Zmc2V0IH0gfSkudGhlbigoKSA9PiB7IH0sICgpID0+IHsgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbmRyb2lkLCBhbmltYXRpb25zIGFyZSBqZXJreSBzbyBpbnN0ZWFkIGp1c3QgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICAgICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxufVxuIl19