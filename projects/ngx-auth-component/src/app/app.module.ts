import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, Type } from "@angular/core";

import { createCustomElement } from "@angular/elements";
import { NgxAuthComponentComponent } from "./ngx-auth-component/ngx-auth-component.component";
import { ButtonComponent } from "./button/button.component";
import { RouterModule } from "@angular/router";

export const angularElements: { [key: string]: Type<any> } = {
  "ngx-auth-component": NgxAuthComponentComponent,
  "app-button": ButtonComponent,
};

const declarations = [NgxAuthComponentComponent, ButtonComponent];

@NgModule({
  declarations: [declarations],
  imports: [BrowserModule, RouterModule.forRoot([])],
  entryComponents: [declarations],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    Object.entries(angularElements).forEach(([selector, componentClass]) => {
      const element = createCustomElement(componentClass, {
        injector: this.injector,
      }) as any;
      customElements.define(selector, element);
    });
  }
}
