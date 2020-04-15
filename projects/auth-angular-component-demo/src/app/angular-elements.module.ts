import { NgModule } from "@angular/core";
import {
  LazyElementModuleRootOptions,
  LazyElementsModule,
} from "@angular-extensions/elements";
import { ElementsLoadingComponent } from "./loading.component";
import { ElementsErrorComponent } from "./error.component";

const BASIC_ELEMENTS_URL = "ngx-auth-component/main.js";
const lazyElementsOptions: LazyElementModuleRootOptions = {
  elementConfigs: [
    // ...SPECIAL_ELEMENTS_CONFIG,
    { tag: "ngx-auth-component", url: BASIC_ELEMENTS_URL },
    { tag: "app-button", url: BASIC_ELEMENTS_URL },
  ],
  rootOptions: {
    loadingComponent: ElementsLoadingComponent,
    errorComponent: ElementsErrorComponent,
  },
};
@NgModule({
  declarations: [ElementsLoadingComponent, ElementsErrorComponent],
  imports: [LazyElementsModule.forRoot(lazyElementsOptions)],
  exports: [LazyElementsModule],
})
export class AngularElementsModule {}
