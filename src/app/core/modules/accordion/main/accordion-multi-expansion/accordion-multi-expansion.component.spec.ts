import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AccordionMultiExpansionComponent } from "./accordion-multi-expansion.component";

describe("AccordionMultiExpansionComponent", () => {
  let component: AccordionMultiExpansionComponent;
  let fixture: ComponentFixture<AccordionMultiExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionMultiExpansionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionMultiExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
