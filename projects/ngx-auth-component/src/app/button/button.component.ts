import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { AuthService, Credentials } from "../auth.service";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() set credentials(credentials: Credentials) {
    if (credentials) {
      this.auth.init(credentials);
    }
  }
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
