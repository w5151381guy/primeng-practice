import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { CalendarComponent } from './app.component'
import { CalendarModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CalendarModule,
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [CalendarComponent],
})
export class CalendarDemoModule {}
