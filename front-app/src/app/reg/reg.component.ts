import { Component, OnInit } from "@angular/core";
import { CheckFormService } from "../check-form.service";
import { FlashMessagesService } from "angular2-flash-messages";

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
    private flashMessages: FlashMessagesService
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
        className: "alert-danger",
        timeout: 4000
      });

      return false;
    } else if (!this.checkForm.checkLastName(user.lastName)) {
      this.flashMessages.show("Cant user LastName", {
        className: "alert-danger",
        timeout: 4000
      });

      return false;
    } else if (!this.checkForm.checkLogin(user.login)) {
      this.flashMessages.show("Cant user login", {
        className: "alert-danger",
        timeout: 4000
      });

      return false;
    } else if (!this.checkForm.checkEmail(user.email)) {
      this.flashMessages.show("Cant user E-mail", {
        className: "alert-danger",
        timeout: 4000
      });

      return false;
    } else if (!this.checkForm.checkPassword(user.password)) {
      this.flashMessages.show("Cant user Password", {
        className: "alert-danger",
        timeout: 4000
      });

      return false;
    }
  }
}
