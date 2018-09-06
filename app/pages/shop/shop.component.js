"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shop_service_1 = require("~/shared/services/shop/shop.service");
var ShopComponent = /** @class */ (function () {
    function ShopComponent(route, shopService) {
        this.route = route;
        this.shopService = shopService;
        this.shop = {};
        this.product = [];
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.shopService.getShop(_this.id).subscribe(function (result) {
                _this.shop = result;
                _this.shopImageProperty = JSON.parse(result['image']);
                _this.shopCover = _this.shopImageProperty['secure_url'];
                // console.log(this.shopCover)
                _this.products = result['products'];
                _this.products.forEach(function (element) {
                    _this.product.push(element.product);
                });
                console.log(_this.product);
            });
        });
    };
    ShopComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-shop',
            templateUrl: './shop.component.html',
            styleUrls: ['./shop.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, shop_service_1.ShopService])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELG9FQUFrRTtBQVFsRTtJQUVFLHVCQUFvQixLQUFxQixFQUFVLFdBQXVCO1FBQXRELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFHMUUsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUlsQixZQUFPLEdBQWUsRUFBRSxDQUFDO0lBUHFELENBQUM7SUFRL0UsZ0NBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNoRCxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztnQkFDbkIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3BELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN0RCw4QkFBOEI7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87b0JBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF6QlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQztpREFHMkIsdUJBQWMsRUFBc0IsMEJBQVc7T0FGL0QsYUFBYSxDQTJCekI7SUFBRCxvQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNob3BTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvc2hvcC9zaG9wLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2hvcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaG9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hvcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHNob3BTZXJ2aWNlOlNob3BTZXJ2aWNlKSB7IH1cblxuICBpZDogbnVtYmVyO1xuICBzaG9wOiBPYmplY3QgPSB7fTtcbiAgc2hvcEltYWdlUHJvcGVydHk6IE9iamVjdDtcbiAgc2hvcENvdmVyO1xuICBwcm9kdWN0cztcbiAgcHJvZHVjdDogQXJyYXk8YW55PiA9IFtdO1xuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmlkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMuc2hvcFNlcnZpY2UuZ2V0U2hvcCh0aGlzLmlkKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zaG9wID0gcmVzdWx0O1xuICAgICAgICB0aGlzLnNob3BJbWFnZVByb3BlcnR5ID0gSlNPTi5wYXJzZShyZXN1bHRbJ2ltYWdlJ10pXG4gICAgICAgIHRoaXMuc2hvcENvdmVyID0gdGhpcy5zaG9wSW1hZ2VQcm9wZXJ0eVsnc2VjdXJlX3VybCddO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNob3BDb3ZlcilcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3VsdFsncHJvZHVjdHMnXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHRoaXMucHJvZHVjdC5wdXNoKGVsZW1lbnQucHJvZHVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3QpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=