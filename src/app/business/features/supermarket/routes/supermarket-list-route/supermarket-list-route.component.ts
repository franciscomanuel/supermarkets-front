import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'horus-supermarket-list-route',
  standalone: true,
  imports: [],
  templateUrl: './supermarket-list-route.component.html',
  styleUrl: './supermarket-list-route.component.sass',
})
export class SupermarketListRouteComponent {
  @HostBinding('class') className = 'flex-container main-page-content';
}
