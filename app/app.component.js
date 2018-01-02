"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n    <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n    <TextField hint=\"Email Address\" keyboardType=\"email\"\n    autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n    <Button text=\"Sign in\" class=\"submit-button\"></Button>\n    <Button text=\"Sign up for Groceries\"></Button>\n    </StackLayout>\n  ",
        styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFnQjFDLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFkeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxzY0FTVDtRQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxuICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuICAgIDxCdXR0b24gdGV4dD1cIlNpZ24gaW5cIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj48L0J1dHRvbj5cbiAgICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwIGZvciBHcm9jZXJpZXNcIj48L0J1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFsncGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzcycsICdwYWdlcy9sb2dpbi9sb2dpbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9Il19