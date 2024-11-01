import { Component, forwardRef } from "@angular/core";
import { ColumnBaseComponent } from "../base/column/column-base.component";

@Component({
  selector: "horus-text-column-sorted",
  templateUrl: "./text-column-sorted.component.html",
  providers: [
    {
      provide: ColumnBaseComponent,
      useExisting: forwardRef(() => TextColumnSortedComponent)
    }
  ]
})
export class TextColumnSortedComponent extends ColumnBaseComponent {}
