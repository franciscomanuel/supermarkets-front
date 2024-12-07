import { AfterContentInit, Component, ContentChildren, Input, QueryList, ViewChild } from "@angular/core";
import { PAGE_SIZE_OPTIONS } from "../../constants/table.constants";
import { TableSize } from "../../enums";
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable } from "@angular/material/table";
import { ColumnBaseComponent } from "../../components/base/column/column-base.component";
import { HeaderBaseComponent } from "../../components/base/header/header-base.component";
import { MatPaginator } from "@angular/material/paginator";

@Component({
    template: "",
    standalone: false
})
export class BaseTableComponent<T> implements AfterContentInit {
  @Input({ required: true }) id!: string;
  @Input() noDataMessage!: string;
  @Input() total!: number;
  @Input() pageSizeOptions = PAGE_SIZE_OPTIONS;
  @Input() pageSize!: number;
  @Input() tableSize = TableSize.Full;
  @Input() showPaginator = true;
  @Input() multiTemplateDataRows = false;

  @ContentChildren(MatHeaderRowDef) headerRowDef!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDef!: QueryList<MatRowDef<any>>;
  @ContentChildren(MatColumnDef) columnDef!: QueryList<MatColumnDef>;

  @ContentChildren(ColumnBaseComponent)
  columnsBase!: QueryList<ColumnBaseComponent>;
  @ContentChildren(HeaderBaseComponent)
  headerBase!: QueryList<HeaderBaseComponent>;

  @ViewChild(MatTable, { static: true }) table!: MatTable<T>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  columns: string[] = [];
  customHeaders: string[] = [];

  ngAfterContentInit(): void {
    this.headerBase.forEach((headerRowDef: HeaderBaseComponent) => {
      this.customHeaders.push(headerRowDef.name);

      headerRowDef.matColumnDef.name = headerRowDef.name;
      headerRowDef.matColumnDef.headerCell = headerRowDef.matHeaderCellDef;

      this.table.addColumnDef(headerRowDef.matColumnDef);
    });

    this.columnsBase.forEach((columnRowDef: ColumnBaseComponent) => {
      if (columnRowDef.name !== "expandedDetail") {
        this.columns.push(columnRowDef.name);
      }
      columnRowDef.matColumnDef.name = columnRowDef.name;
      columnRowDef.matColumnDef.headerCell = columnRowDef.matHeaderCellDef;
      columnRowDef.matColumnDef.cell = columnRowDef.matCellDef;

      this.table.addColumnDef(columnRowDef.matColumnDef);
    });
  }
}
