import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketListRouteComponent } from './supermarket-list-route.component';

describe('SupermarketListRouteComponent', () => {
  let component: SupermarketListRouteComponent;
  let fixture: ComponentFixture<SupermarketListRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupermarketListRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermarketListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
