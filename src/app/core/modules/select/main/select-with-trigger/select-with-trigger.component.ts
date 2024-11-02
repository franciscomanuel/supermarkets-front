import { KeyValue } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SelectErrorStateMatcher } from "../../utils/error-state-matcher.model";

@Component({
  selector: "horus-select-with-trigger",
  templateUrl: "./select-with-trigger.component.html",
  styleUrl: "./select-with-trigger.component.sass"
})
export class SelectWithTriggerComponent {
  @Input({ required: true }) formControl!: FormControl<string[] | number[] | null>;
  @Input({ required: true }) options!: KeyValue<string | number, string>[];
  @Input({ required: true }) label!: string;

  getFirstSelectedValue(): string {
    const selectedKeys = this.formControl.value || [];
    const option = this.getOptionSelected(selectedKeys);
    return option?.value.substring(0, 10) || "";
  }

  matcher = new SelectErrorStateMatcher();

  private getOptionSelected(selectedKeys: string[] | number[]): KeyValue<string | number, string> | undefined {
    return this.options.find((option: KeyValue<string | number, string>) => option.key === selectedKeys[0]);
  }
}
