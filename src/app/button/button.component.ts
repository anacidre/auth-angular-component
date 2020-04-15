import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  constructor(public auth: AuthService) {
    console.log(this.auth);
  }

  ngOnInit() {}
}
