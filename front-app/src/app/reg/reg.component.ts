import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}

  userRegisterClick() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      login: this.login,
      email: this.email,
      password: this.password
    };

    console.log("******", user);
  }
}
