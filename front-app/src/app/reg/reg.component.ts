import { Component, OnInit } from "@angular/core";
import { CheckFormService } from "../check-form.service";
import { AuthService } from "../auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-reg",
  templateUrl: "./reg.component.html",
  styleUrls: ["./reg.component.css"]
})
export class RegComponent implements OnInit {
  firstName: String;
  lastName: String;
  login: String;
  email: String;
  password: String;

  constructor(
    private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  userRegisterClick() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      login: this.login,
      email: this.email,
      password: this.password
    };

    // if (!this.checkForm.checkFirstName(user.firstName)) {
    //   console.log("Anasun Alllooooo");
    //   return false;
    // }

    console.log(this.checkForm.checkFirstName(user.firstName));
    console.log(this.checkForm.checkLastName(user.lastName));
    console.log(this.checkForm.checkLogin(user.login));
    console.log(this.checkForm.checkEmail(user.email));
    console.log(this.checkForm.checkPassword(user.password));

    if (!this.checkForm.checkFirstName(user.firstName)) {
      this.flashMessages.show("Cant user First Name", {
        cssClass: "alert-danger",
        timeout: 4000
      });

      return false;
    } else if (!this.checkForm.checkLastName(user.lastName)) {
      this.flashMessages.show("Cant user LastName", {
        cssClass: "alert-danger",
        timeout: 4000
      });

      return false;
    } else if (!this.checkForm.checkLogin(user.login)) {
      this.flashMessages.show("Cant user login", {
        cssClass: "alert-danger",
        timeout: 4000
      });

      return false;
    } else if (!this.checkForm.checkEmail(user.email)) {
      this.flashMessages.show("Cant user E-mail", {
        cssClass: "alert-danger",
        timeout: 4000
      });

      return false;
    } else if (!this.checkForm.checkPassword(user.password)) {
      this.flashMessages.show("Cant user Password", {
        cssClass: "alert-danger",
        timeout: 4000
      });

      return false;
    }

    // this.authService.registerUser(user).subscribe(data => {
    //   if (!data.success) {
    //     this.flashMessages.show(data.msg, {
    //       cssClass: "alert-danger",
    //       timeout: 2000
    //     });
    //     this.router.navigate(["/reg"]);
    //   } else {
    //     this.flashMessages.show(data.msg, {
    //       cssClass: "alert-success",
    //       timeout: 2000
    //     });
    //     this.router.navigate(["/auth"]);
    //   }
    // });
  }
}
