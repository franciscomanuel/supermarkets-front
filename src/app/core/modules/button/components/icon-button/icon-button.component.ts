import { Component, Input } from "@angular/core";
import { BaseButtonComponent } from "../base/base-button.component";

@Component({
  selector: "horus-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrl: "./icon-button.component.sass"
})
export class IconButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) icon!: string;
}
