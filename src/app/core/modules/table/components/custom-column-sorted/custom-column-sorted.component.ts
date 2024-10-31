import {
  Component,
  ContentChild,
  forwardRef,
  TemplateRef,
} from '@angular/core';
import { ColumnBaseComponent } from '../base/column/column-base.component';

@Component({
  selector: 'horus-custom-column-sorted',
  templateUrl: './custom-column-sorted.component.html',
  providers: [
    {
      provide: ColumnBaseComponent,
      useExisting: forwardRef(() => CustomColumnSortedComponent),
    },
  ],
})
export class CustomColumnSortedComponent extends ColumnBaseComponent {
  @ContentChild('headerTemplate', { static: true })
  headerTemplate!: TemplateRef<unknown>;
  @ContentChild('cellTemplate', { static: true })
  cellTemplate!: TemplateRef<unknown>;
}
