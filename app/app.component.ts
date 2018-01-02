import { User } from './shared/user/user';
import { Component } from "@angular/core";
import { UserService } from "./shared/user/user.service";
@Component({
  selector: "my-app",
  templateUrl: `./pages/login/login.html`,
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css'],
  providers: [UserService]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
    this.user.email = "hoanglg@email.com";
    this.user.password = "hoanglgpw";
  }

  submit() {
    console.log("submit");
    if (!this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    //TODO
  }

  signUp() {
    console.log("signUp");
    this.userService.register(this.user).subscribe(() => {
      alert("Your account was successfully created!");
      this.toggleDisplay;
    }, () => alert("Unfortunately we were unable to create your account!"));
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

}