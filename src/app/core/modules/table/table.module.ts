import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CustomColumnComponent } from "./components/custom-column/custom-column.component";
import { CustomColumnSortedComponent } from "./components/custom-column-sorted/custom-column-sorted.component";
import { CustomHeaderComponent } from "./components/custom-header/custom-header.component";
import { DateColumnComponent } from "./components/date-column/date-column.component";
import { DateColumnSortedComponent } from "./components/date-column-sorted/date-column-sorted.component";
import { TextColumnComponent } from "./components/text-column/text-column.component";
import { TextColumnSortedComponent } from "./components/text-column-sorted/text-column-sorted.component";
import { BaseTableComponent } from "./main/base/base-table.component";
import { ClientTableComponent } from "./main/client-table/client-table.component";
import { ServerTableComponent } from "./main/server-table/server-table.component";
import { ColumnBaseComponent } from "./components/base/column/column-base.component";
import { HeaderBaseComponent } from "./components/base/header/header-base.component";

@NgModule({
  declarations: [
    CustomColumnComponent,
    CustomColumnSortedComponent,
    CustomHeaderComponent,
    DateColumnComponent,
    DateColumnSortedComponent,
    TextColumnComponent,
    TextColumnSortedComponent,
    BaseTableComponent,
    ClientTableComponent,
    ServerTableComponent,
    ColumnBaseComponent,
    HeaderBaseComponent
  ],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, DragDropModule, MatTooltipModule],
  exports: [
    CustomColumnComponent,
    CustomColumnSortedComponent,
    CustomHeaderComponent,
    DateColumnComponent,
    DateColumnSortedComponent,
    TextColumnComponent,
    TextColumnSortedComponent,
    BaseTableComponent,
    ClientTableComponent,
    ServerTableComponent,
    ColumnBaseComponent,
    HeaderBaseComponent
  ]
})
export class TableModule {}
