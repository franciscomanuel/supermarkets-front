import { Component, HostBinding } from "@angular/core";

@Component({
    selector: "horus-product-list-route",
    imports: [],
    templateUrl: "./product-list-route.component.html",
    styleUrl: "./product-list-route.component.sass"
})
export class ProductListRouteComponent {
  @HostBinding("class") className = "flex-container main-page-content";
}
