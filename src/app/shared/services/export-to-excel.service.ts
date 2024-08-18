import { Injectable } from '@angular/core';
import { read, utils, writeFile, writeFileXLSX } from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExportToExcelService {
  constructor() {}

  exportToExcel(
    workSheetName: string,
    workBookName: string,
    header: string[],
    data: any
  ) {
    const workBook = utils.book_new();
    const workSheet = utils.json_to_sheet([]);
    utils.sheet_add_aoa(workSheet, [header]);
    utils.sheet_add_json(workSheet, data, { origin: 'A2', skipHeader: true });
    utils.book_append_sheet(workBook, workSheet, workSheetName);
    writeFileXLSX(workBook, workBookName + '.xlsx');
  }
}
