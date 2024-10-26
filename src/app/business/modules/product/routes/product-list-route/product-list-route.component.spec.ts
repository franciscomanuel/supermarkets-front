import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListRouteComponent } from './product-list-route.component';

describe('ProductListRouteComponent', () => {
  let component: ProductListRouteComponent;
  let fixture: ComponentFixture<ProductListRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
