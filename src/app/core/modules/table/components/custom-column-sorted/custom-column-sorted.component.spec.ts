import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomColumnSortedComponent } from './custom-column-sorted.component';

describe('CustomColumnSortedComponent', () => {
  let component: CustomColumnSortedComponent;
  let fixture: ComponentFixture<CustomColumnSortedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomColumnSortedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomColumnSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
