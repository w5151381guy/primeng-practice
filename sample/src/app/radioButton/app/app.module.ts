import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { RadioButtonComponent } from './app.component'
import { RadioButtonModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RadioButtonModule,
  ],
  declarations: [RadioButtonComponent],
  providers: [],
  exports: [RadioButtonComponent, CommonModule, FormsModule],
  bootstrap: [RadioButtonComponent],
})
export class RadioButtonDemoModule {}
