"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./../../shared/user/user.service");
var user_1 = require("./../../shared/user/user");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "hoanglg@email.com";
        this.user.password = "hoanglgpw";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user).subscribe(function () { return _this.router.navigate(["/list"], function (error) { return alert('Unfortunately we could not find your account'); }); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user).subscribe(function () {
            alert("Your account was successfully created!");
            _this.toggleDipslay();
        }, function () { return alert("Unfortunately we were unable to create your account!"); });
    };
    LoginComponent.prototype.toggleDipslay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "app-login",
        templateUrl: "./login.html",
        styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUVBQStEO0FBQy9ELGlEQUFnRDtBQUNoRCxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBT3pDLElBQWEsY0FBYztJQUl2Qix3QkFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZwRSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUlmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFDNUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsOENBQThDLENBQUMsRUFBckQsQ0FBcUQsQ0FBQyxFQURuQixDQUNtQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDM0MsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLEVBQTdELENBQTZELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ1ksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7UUFDeEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUMzQixDQUFDO3FDQUttQywwQkFBVyxFQUFrQixlQUFNO0dBSjNELGNBQWMsQ0FtQzFCO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC91c2VyL3VzZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJob2FuZ2xnQGVtYWlsLmNvbVwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcImhvYW5nbGdwd1wiO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoJ1VuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50JykpKTtcbiAgICB9XG5cbiAgICBzaWduVXAoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIVwiKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlwc2xheSgpO1xuICAgICAgICB9LCAoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudCFcIikpO1xuICAgIH1cblxuICAgIHRvZ2dsZURpcHNsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICB9XG5cbn0iXX0=