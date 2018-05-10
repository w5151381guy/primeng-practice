import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { InputTextComponent } from './app.component'
import { InputTextModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    InputTextModule,
  ],
  declarations: [InputTextComponent],
  exports: [InputTextComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [InputTextComponent],
})
export class InputTextDemoModule {}
