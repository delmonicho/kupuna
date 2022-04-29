import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseTrackerComponent } from './pages/expense-tracker/expense-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
