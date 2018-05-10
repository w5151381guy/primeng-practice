import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DropdownComponent } from './app.component'
import { DropdownModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    DropdownModule,
  ],
  declarations: [DropdownComponent],
  exports: [DropdownComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [DropdownComponent],
})
export class DropdownDemoModule {}
