import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppCoreModule } from './core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCoreModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    NgxSpinnerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
