import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BaseTableComponent } from '../base/base-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'horus-server-table',
  templateUrl: '../base/table-base.component.html',
  styleUrl: '../base/base.table.component.sass',
})
export class ServerTableComponent<T>
  extends BaseTableComponent<T>
  implements OnInit, OnDestroy
{
  private readonly unsubscribeSubject$ = new Subject<void>();

  private _auxiliaryDataSource!: MatTableDataSource<T>;
  @Input() set dataSource(value: MatTableDataSource<T>) {
    this._auxiliaryDataSource = value;
    this.table.dataSource = this._auxiliaryDataSource;
  }

  @Output() pageChange = new EventEmitter<unknown>();

  ngOnInit(): void {
    this.subscribePaginatorChange();
  }
  ngOnDestroy(): void {
    this.unsubscribeSubject$.next();
    this.unsubscribeSubject$.complete();
  }

  firstPage(): void {
    this.paginator.firstPage();
  }

  private subscribePaginatorChange(): void {
    this.paginator.page
      .pipe(takeUntil(this.unsubscribeSubject$))
      .subscribe((pageEvent: PageEvent) => {
        this.pageChange.emit({
          start: pageEvent.pageIndex * pageEvent.pageSize,
          limit: pageEvent.pageSize,
        });
      });
  }
}
