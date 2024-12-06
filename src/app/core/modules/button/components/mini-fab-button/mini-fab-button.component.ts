import { Component, Input } from "@angular/core";
import { BaseButtonComponent } from "../base/base-button.component";

@Component({
    selector: "horus-mini-fab-button",
    templateUrl: "./mini-fab-button.component.html",
    styleUrl: "./mini-fab-button.component.sass",
    standalone: false
})
export class MiniFabButtonComponent extends BaseButtonComponent {
  @Input({ required: true }) icon!: string;
}
