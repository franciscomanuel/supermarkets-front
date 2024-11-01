import { Component, Input, ViewChild } from "@angular/core";
import { MatCellDef, MatColumnDef, MatHeaderCellDef } from "@angular/material/table";

@Component({
  template: ""
})
export class ColumnBaseComponent {
  @Input({ required: true }) name!: string;
  @Input() title!: string;

  @ViewChild(MatColumnDef, { static: true }) matColumnDef!: MatColumnDef;
  @ViewChild(MatHeaderCellDef, { static: true })
  matHeaderCellDef!: MatHeaderCellDef;
  @ViewChild(MatCellDef, { static: true }) matCellDef!: MatCellDef;
}
