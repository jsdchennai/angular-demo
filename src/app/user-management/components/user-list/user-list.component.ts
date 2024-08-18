import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/models';
import { ExportToExcelService } from 'src/app/shared/services/export-to-excel.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'birthDate',
    'bloodGroup',
  ];

  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 25];
  skip: number = 0;

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;

  constructor(private excel: ExportToExcelService) {}

  @Input() dataSource: User[] = [];

  @Input() length: number = 0;

  @Output() submitted = new EventEmitter();

  handlePageEvent(pageEvent: PageEvent) {
    this.length = pageEvent.length;
    this.pageSize = pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;

    if (this.pageIndex == 0) {
      this.skip = 0;
    }

    if (this.pageIndex >= 1) {
      this.skip = pageEvent.pageSize * pageEvent.pageIndex;
    }

    let request = {
      limit: this.pageSize,
      skip: this.skip,
    };

    this.submitted.emit(request);
  }

  exportToExcel() {
    let mappedData: any = [];
    let header: string[] = [
      'First Name',
      'Last Name',
      'Blood Group',
      'Birth Date',
    ];
    this.dataSource.forEach((data: any) => {
      let user = {
        firstName: data.firstName,
        lastName: data.lastName,
        bloodGroup: data.bloodGroup,
        birthDate: data.birthDate,
      };
      mappedData.push(user);
    });

    this.excel.exportToExcel('users', 'users', header, mappedData);
  }
}
