import { Component, Input } from "@angular/core";
import { BaseButtonComponent } from "../base/base-button.component";

@Component({
    selector: "horus-basic-button",
    templateUrl: "./basic-button.component.html",
    standalone: false
})
export class BasicButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) text!: string;
  @Input() icon!: string;
}
