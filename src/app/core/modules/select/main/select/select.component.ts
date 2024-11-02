import { KeyValue } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SelectErrorStateMatcher } from "../../utils/error-state-matcher.model";

@Component({
  selector: "horus-select",
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.sass"
})
export class SelectComponent {
  @Input({ required: true }) formControl!: FormControl<string | number | null>;
  @Input({ required: true }) options!: KeyValue<string | number, string>[];
  @Input({ required: true }) label!: string;
  @Input() multiple = false;

  /**
   * Indica el tamaño que debe ocupar las opciones del menú.
   * Si se pasa null o "" el tamaño será el máximo de la opción más larga
   * Si se pasa un string o number, el máximo será el indicado.
   * @default null
   */
  @Input() panelWidth: string | number | null = null;
  @Input() placeholder!: string;

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

  matcher = new SelectErrorStateMatcher();
}
