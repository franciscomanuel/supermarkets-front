import { Component, HostBinding, inject, OnInit, signal } from "@angular/core";
import { ButtonModule } from "../../../../../core/modules/button/button.module";
import { TableModule } from "../../../../../core/modules/table/table.module";
import { PAGE_SIZE_OPTIONS } from "../../../../../core/modules/table/constants/table.constants";
import { MatTableDataSource } from "@angular/material/table";
import { AccordionModule } from "../../../../../core/modules/accordion/accordion.module";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { KeyValue } from "@angular/common";
import { SelectModule } from "../../../../../core/modules/select/select.module";
import { InputModule } from "../../../../../core/modules/input/input.module";

interface DataSource {
  id: number;
  name: string;
  surname: string;
}
@Component({
  selector: "horus-home-route",
  standalone: true,
  imports: [ButtonModule, TableModule, AccordionModule, TranslateModule, SelectModule, InputModule],
  templateUrl: "./home-route.component.html",
  styleUrl: "./home-route.component.sass"
})
export class HomeRouteComponent implements OnInit {
  @HostBinding("class") className = "flex-container main-page-content";

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  datasource: MatTableDataSource<DataSource> = new MatTableDataSource();
  step = signal(0);
  form!: FormGroup;
  animals: KeyValue<number, string>[] = [];

  get animalControl(): FormControl<number | string> {
    return this.form.get("animals") as FormControl<number | string>;
  }

  get animalControl2(): FormControl<string[]> {
    return this.form.get("animals2") as FormControl<string[]>;
  }

  get inputControl(): FormControl<string> {
    return this.form.get("valueInput") as FormControl<string>;
  }

  get inputControl2(): FormControl<string> {
    return this.form.get("valueInput2") as FormControl<string>;
  }

  ngOnInit(): void {
    this.initAnimals();
    this.createForm();
    this.initDataSource();
  }

  onClickButton(): void {
    console.log("form: ", this.form);
  }

  private createForm(): void {
    this.form = new FormGroup({
      animals: new FormControl(null, Validators.required),
      animals2: new FormControl(null, Validators.required),
      valueInput: new FormControl("", [Validators.required, Validators.maxLength(2)]),
      valueInput2: new FormControl("", Validators.required)
    });
  }

  private initAnimals(): void {
    this.animals = [
      {
        key: 1,
        value: "Tigre"
      },
      {
        key: 2,
        value: "Leon con texto muy muy muy muy muy muy largo"
      },
      {
        key: 3,
        value: "Gato"
      }
    ];
  }

  private initDataSource(): void {
    this.datasource.data = [
      {
        id: 1,
        name: "Name 1",
        surname: "Surname 1"
      },
      {
        id: 2,
        name: "Name 2",
        surname: "Surname 2"
      },
      {
        id: 3,
        name: "Name 3",
        surname: "Surname 3"
      },
      {
        id: 4,
        name: "Name 4",
        surname: "Surname 4"
      },
      {
        id: 5,
        name: "Name 5",
        surname: "Surname 5"
      },
      {
        id: 6,
        name: "Name 6",
        surname: "Surname 6"
      },
      {
        id: 7,
        name: "Name 7",
        surname: "Surname 7"
      }
    ];
  }

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update((i: number) => i + 1);
  }

  prevStep() {
    this.step.update((i: number) => i - 1);
  }
}
