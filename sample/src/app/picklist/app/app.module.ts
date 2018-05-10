import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { PickListComponent } from './app.component'
import { PickListModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    PickListModule,
  ],
  declarations: [PickListComponent],
  providers: [],
  exports: [PickListComponent, CommonModule, FormsModule],
  bootstrap: [PickListComponent],
})
export class PickListDemoModule {}
