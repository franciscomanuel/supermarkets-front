import { Component, Input } from "@angular/core";
import { BaseButtonComponent } from "../base/base-button.component";

@Component({
    selector: "horus-fab-button",
    templateUrl: "./fab-button.component.html",
    styleUrl: "./fab-button.component.sass",
    standalone: false
})
export class FabButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) icon!: string;
}
