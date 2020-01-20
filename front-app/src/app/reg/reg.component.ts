import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reg",
  templateUrl: "./reg.component.html",
  styleUrls: ["./reg.component.css"]
})
export class RegComponent implements OnInit {

  firstName: String,
  lastName: String,

  constructor() {}

  ngOnInit() {}

  userRegisterClick() {
    console.log("Hello Angular ");
    return false;
  }
}
