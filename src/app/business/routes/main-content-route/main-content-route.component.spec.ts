import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentRouteComponent } from './main-content-route.component';

describe('MainContentRouteComponent', () => {
  let component: MainContentRouteComponent;
  let fixture: ComponentFixture<MainContentRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
