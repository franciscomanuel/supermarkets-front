import { Component, ContentChild, forwardRef, TemplateRef } from "@angular/core";
import { ColumnBaseComponent } from "../base/column/column-base.component";

@Component({
    selector: "horus-custom-column",
    templateUrl: "./custom-column.component.html",
    providers: [
        {
            provide: ColumnBaseComponent,
            useExisting: forwardRef(() => CustomColumnComponent)
        }
    ],
    standalone: false
})
export class CustomColumnComponent extends ColumnBaseComponent {
  @ContentChild("headerTemplate", { static: true })
  headerTemplate!: TemplateRef<unknown>;
  @ContentChild("cellTemplate", { static: true })
  cellTemplate!: TemplateRef<unknown>;
}
