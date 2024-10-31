import { Component, Input } from '@angular/core';

@Component({
  selector: 'horus-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.sass',
})
export class ExpansionPanelComponent {
  @Input() disabled = false;
  @Input() expanded = false;
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
}
