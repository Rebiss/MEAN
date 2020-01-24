import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: Http) {}

  registerUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3011/account/reg", user, { headers: headers })
      .map(res => res.json());
  }
}
