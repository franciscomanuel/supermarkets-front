import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWithTriggerComponent } from './select-with-trigger.component';

describe('SelectWithTriggerComponent', () => {
  let component: SelectWithTriggerComponent;
  let fixture: ComponentFixture<SelectWithTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectWithTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWithTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
