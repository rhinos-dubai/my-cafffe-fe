"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var user_service_1 = require("~/shared/services/user/user.service");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, location) {
        this.userService = userService;
        this.location = location;
        this.input = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": "",
            "phone": "1234",
            "gender": "M",
            "country": "Pakistan",
            "dob": "2018/11/14",
            "address": "dubai"
        };
    }
    SignupComponent.prototype.register = function () {
        var _this = this;
        // console.log(this.input);
        if (this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
            /*ApplicationSettings.setString("account", JSON.stringify(this.input));
            this.location.back();*/
            // console.log(this.input);
            this.userService.RegisterUser(this.input).subscribe(function (result) {
                console.log("SignUP", result.data.signUp);
                _this.location.back();
            });
            //console.log(User);
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    SignupComponent.prototype.goBack = function () {
        this.location.back();
    };
    SignupComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [user_service_1.UserService, common_1.Location])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUE2QztBQUM3QywrREFBaUQ7QUFFakQsb0VBQWlFO0FBUWpFO0lBSUUseUJBQTJCLFdBQXdCLEVBQVUsUUFBaUI7UUFBbkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQzFFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsU0FBUyxFQUFFLFVBQVU7WUFDckIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsU0FBUyxFQUFFLE9BQU87U0FDbkIsQ0FBQTtJQUNMLENBQUM7SUFFTSxrQ0FBUSxHQUFmO1FBQUEsaUJBY0M7UUFiRywyQkFBMkI7UUFDM0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hGO21DQUN1QjtZQUN2QiwyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUE7WUFDRixvQkFBb0I7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDTCxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQXBDVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDO2lEQUt3QywwQkFBVyxFQUFtQixpQkFBUTtPQUpuRSxlQUFlLENBc0MzQjtJQUFELHNCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24sICB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2hhcmVkL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlXCJcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWdudXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBpbnB1dDogYW55O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBsb2NhdGlvbjpMb2NhdGlvbikge1xuICAgICAgdGhpcy5pbnB1dCA9IHtcbiAgICAgICAgICBcImZpcnN0bmFtZVwiOiBcIlwiLFxuICAgICAgICAgIFwibGFzdG5hbWVcIjogXCJcIixcbiAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXG4gICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxuICAgICAgICAgIFwicGhvbmVcIjogXCIxMjM0XCIsXG5cdFx0ICAgICAgXCJnZW5kZXJcIjogXCJNXCIsXG5cdFx0ICAgICAgXCJjb3VudHJ5XCI6IFwiUGFraXN0YW5cIixcblx0XHQgICAgICBcImRvYlwiOiBcIjIwMTgvMTEvMTRcIixcblx0XHQgICAgICBcImFkZHJlc3NcIjogXCJkdWJhaVwiXG4gICAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgICAgIGlmKHRoaXMuaW5wdXQuZmlyc3RuYW1lICYmIHRoaXMuaW5wdXQubGFzdG5hbWUgJiYgdGhpcy5pbnB1dC5lbWFpbCAmJiB0aGlzLmlucHV0LnBhc3N3b3JkKSB7XG4gICAgICAgICAgLypBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjY291bnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pbnB1dCkpO1xuICAgICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpOyovXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbnB1dCk7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5SZWdpc3RlclVzZXIodGhpcy5pbnB1dCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnblVQXCIgLCByZXN1bHQuZGF0YS5zaWduVXApO1xuICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vY29uc29sZS5sb2coVXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiQWxsIEZpZWxkcyBSZXF1aXJlZCFcIik7XG4gICAgICB9XG4gIH1cblxuICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cblxufVxuIl19