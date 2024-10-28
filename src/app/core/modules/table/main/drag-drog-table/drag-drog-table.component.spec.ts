import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDrogTableComponent } from './drag-drog-table.component';

describe('DragDrogTableComponent', () => {
  let component: DragDrogTableComponent;
  let fixture: ComponentFixture<DragDrogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDrogTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDrogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
