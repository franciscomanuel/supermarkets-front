import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'horus-home-route',
  standalone: true,
  imports: [],
  templateUrl: './home-route.component.html',
  styleUrl: './home-route.component.sass',
})
export class HomeRouteComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
