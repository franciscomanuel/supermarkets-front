import { Component, HostBinding, OnInit } from '@angular/core';
import { ButtonModule } from '../../../../../core/modules/button/button.module';
import { TableModule } from '../../../../../core/modules/table/table.module';
import { PAGE_SIZE_OPTIONS } from '../../../../../core/modules/table/constants/table.constants';
import { MatTableDataSource } from '@angular/material/table';

interface DataSource {
  id: number;
  name: string;
  surname: string;
}
@Component({
  selector: 'horus-home-route',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './home-route.component.html',
  styleUrl: './home-route.component.sass',
})
export class HomeRouteComponent implements OnInit {
  @HostBinding('class') className = 'flex-container main-page-content';

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  datasource: MatTableDataSource<DataSource> = new MatTableDataSource();

  ngOnInit(): void {
    this.datasource.data = [
      {
        id: 1,
        name: 'Name 1',
        surname: 'Surname 1',
      },
      {
        id: 2,
        name: 'Name 2',
        surname: 'Surname 2',
      },
      {
        id: 3,
        name: 'Name 3',
        surname: 'Surname 3',
      },
      {
        id: 4,
        name: 'Name 4',
        surname: 'Surname 4',
      },
      {
        id: 5,
        name: 'Name 5',
        surname: 'Surname 5',
      },
      {
        id: 6,
        name: 'Name 6',
        surname: 'Surname 6',
      },
      {
        id: 7,
        name: 'Name 7',
        surname: 'Surname 7',
      },
    ];
  }
}
