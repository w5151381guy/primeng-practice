import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { TableComponent } from './app.component'
import { DataTableModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    DataTableModule,
  ],
  declarations: [TableComponent],
  exports: [TableComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [TableComponent],
})
export class DataTableDemoModule {}
