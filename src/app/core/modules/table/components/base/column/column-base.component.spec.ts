import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnBaseComponent } from './column-base.component';

describe('ColumnBaseComponent', () => {
  let component: ColumnBaseComponent;
  let fixture: ComponentFixture<ColumnBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColumnBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
