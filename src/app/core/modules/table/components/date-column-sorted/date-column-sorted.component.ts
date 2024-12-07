import { Component, forwardRef, Input } from "@angular/core";
import { ColumnBaseComponent } from "../base/column/column-base.component";

@Component({
    selector: "horus-date-column-sorted",
    templateUrl: "./date-column-sorted.component.html",
    providers: [
        {
            provide: ColumnBaseComponent,
            useExisting: forwardRef(() => DateColumnSortedComponent)
        }
    ],
    standalone: false
})
export class DateColumnSortedComponent extends ColumnBaseComponent {
  @Input() pattern!: string;
}
