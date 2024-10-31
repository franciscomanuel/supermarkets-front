import { Component, forwardRef, Input } from '@angular/core';
import { ColumnBaseComponent } from '../base/column/column-base.component';

@Component({
  selector: 'horus-date-column',
  templateUrl: './date-column.component.html',
  providers: [
    {
      provide: ColumnBaseComponent,
      useExisting: forwardRef(() => DateColumnComponent),
    },
  ],
})
export class DateColumnComponent extends ColumnBaseComponent {
  @Input() pattern!: string;
}
