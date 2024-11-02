import { Component, Input } from "@angular/core";
import { SelectBaseComponent } from "../../components/select-base/select-base.component";

@Component({
  selector: "horus-select",
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.sass"
})
export class SelectComponent extends SelectBaseComponent<string | number> {
  @Input() multiple = false;

  private _hideSingleSelectionIndicator = false;
  @Input()
  set hideSingleSelectionIndicator(value: boolean) {
    if (this.multiple && value) {
      this._hideSingleSelectionIndicator = false;
      console.warn("hideSingleSelectionIndicator cannot be true when multiple is enabled.");
    } else {
      this._hideSingleSelectionIndicator = value;
    }
  }

  get hideSingleSelectionIndicator(): boolean {
    return this._hideSingleSelectionIndicator;
  }
}
