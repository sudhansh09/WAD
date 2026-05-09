import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

  displayName: string = "";
  displayAddress: string = "";
  displayEmail: string = "";
  displayMobile: string = "";

  getValue(name: string, address: string, mobile: string, email: string) : void {
    this.displayName = name;
    this.displayAddress = address;
    this.displayEmail = email;
    this.displayMobile = mobile;
  }
}