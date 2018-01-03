
import { UserService } from './../../shared/user/user.service';
import { User } from './../../shared/user/user';
import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "app-login",
    templateUrl: "./login.html",
    styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"],
    providers: [UserService]
})
export class LoginComponent {
    user: User;
    isLoggingIn = true;

    constructor(private userService: UserService, private router: Router) {

        this.user = new User();
        this.user.email = "hoanglg@email.com";
        this.user.password = "hoanglgpw";
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        this.userService.login(this.user).subscribe(() => this.router.navigate(["/list"],
            (error) => alert('Unfortunately we could not find your account')));
    }

    signUp() {
        this.userService.register(this.user).subscribe(() => {
            alert("Your account was successfully created!");
            this.toggleDipslay();
        }, () => alert("Unfortunately we were unable to create your account!"));
    }

    toggleDipslay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

}