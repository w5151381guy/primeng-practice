import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { ButtonComponent } from './app.component'
import { ButtonModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ButtonModule,
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [ButtonComponent],
})
export class ButtonDemoModule {}
