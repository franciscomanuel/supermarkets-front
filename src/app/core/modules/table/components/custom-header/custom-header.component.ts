import { Component, ContentChild, forwardRef, TemplateRef } from "@angular/core";
import { HeaderBaseComponent } from "../base/header/header-base.component";

@Component({
    selector: "horus-custom-header",
    templateUrl: "./custom-header.component.html",
    providers: [
        {
            provide: HeaderBaseComponent,
            useExisting: forwardRef(() => CustomHeaderComponent)
        }
    ],
    standalone: false
})
export class CustomHeaderComponent extends HeaderBaseComponent {
  @ContentChild("headerTemplate", { static: true })
  headerTemplate!: TemplateRef<unknown>;
}
