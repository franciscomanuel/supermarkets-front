import { Component, Input } from "@angular/core";
import { BaseButtonComponent } from "../base/base-button.component";

@Component({
    selector: "horus-extended-fab-button",
    templateUrl: "./extended-fab-button.component.html",
    styleUrl: "./extended-fab-button.component.sass",
    standalone: false
})
export class ExtendedFabButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) icon!: string;
}
