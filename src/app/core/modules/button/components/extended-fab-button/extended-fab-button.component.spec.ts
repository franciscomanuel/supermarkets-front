import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFabButtonComponent } from './extended-fab-button.component';

describe('ExtendedFabButtonComponent', () => {
  let component: ExtendedFabButtonComponent;
  let fixture: ComponentFixture<ExtendedFabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedFabButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedFabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
