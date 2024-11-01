import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DateColumnSortedComponent } from "./date-column-sorted.component";

describe("DateColumnSortedComponent", () => {
  let component: DateColumnSortedComponent;
  let fixture: ComponentFixture<DateColumnSortedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateColumnSortedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DateColumnSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
