import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./button/button.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule, RouterModule.forRoot([])],
  bootstrap: [AppComponent],
})
export class AppModule {}
