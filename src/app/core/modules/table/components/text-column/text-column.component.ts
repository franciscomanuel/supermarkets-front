import { Component, forwardRef } from "@angular/core";
import { ColumnBaseComponent } from "../base/column/column-base.component";

@Component({
    selector: "horus-text-column",
    templateUrl: "./text-column.component.html",
    providers: [
        {
            provide: ColumnBaseComponent,
            useExisting: forwardRef(() => TextColumnComponent)
        }
    ],
    standalone: false
})
export class TextColumnComponent extends ColumnBaseComponent {}
