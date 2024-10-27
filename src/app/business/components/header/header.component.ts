import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'horus-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {}
