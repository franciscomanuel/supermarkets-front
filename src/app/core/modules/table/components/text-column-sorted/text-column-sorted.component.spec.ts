import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TextColumnSortedComponent } from "./text-column-sorted.component";

describe("TextColumnSortedComponent", () => {
  let component: TextColumnSortedComponent;
  let fixture: ComponentFixture<TextColumnSortedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextColumnSortedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TextColumnSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
