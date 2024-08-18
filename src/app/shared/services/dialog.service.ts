import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertConfig, ConfirmationDialogConfig } from 'src/app/models';
import { AlertComponent, ConfirmationDialogComponent } from '../components';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private confirmConfig: ConfirmationDialogConfig;

  private alertConfig: AlertConfig;

  constructor(private dialog: MatDialog) {
    this.confirmConfig = {
      message: 'Are you sure?',
      yesBtn: 'Yes',
      noBtn: 'No',
    };

    this.alertConfig = {
      title: 'Alert',
      message: null,
      type: 'error',
      button: 'OK',
    };
  }

  openConfirm(msg?: string, yesBtn = 'Yes', noBtn = 'No'): Observable<boolean> {
    const config = {
      ...this.confirmConfig,
      message: msg ? msg : this.confirmConfig.message,
      yesBtn,
      noBtn,
    };

    return this.dialog
      .open(ConfirmationDialogComponent, { data: config })
      .afterClosed()
      .pipe(map((result) => result === 'true'));
  }

  openAlert(
    message: string,
    title = 'Alert',
    type = 'error',
    button = 'OK'
  ): void {
    const config = { ...this.alertConfig, message, title, type, button };

    this.dialog.open(AlertComponent, { data: config });
  }
}
