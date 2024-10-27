import { Component } from '@angular/core';
import { ApplicationService } from '../../services/application/application.service';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'horus-toolbar',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.sass',
})
export class ToolbarComponent {
  expanded: boolean = true;

  constructor(private readonly application: ApplicationService) {}

  openClose(): void {
    this.application.setExpanded(!this.expanded);
  }
}
