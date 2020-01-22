import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CheckFormService {
  constructor() {}

  checkFirstName(firstName) {
    if (firstName == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkLastName(lastName) {
    if (lastName == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkLogin(login) {
    if (login == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkEmail(email) {
    if (email == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkPassword(password) {
    if (password == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
