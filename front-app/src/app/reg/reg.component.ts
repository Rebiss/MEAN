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
    console.log("===>", this.firstName);
    return false;
  }
}
