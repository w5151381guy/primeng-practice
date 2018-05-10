import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { DialogComponent } from './app.component'
import { ButtonModule } from 'primeng/primeng'
import { DialogModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
  ],
  declarations: [DialogComponent],
  exports: [DialogComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [DialogComponent],
})
export class DialogDemoModule {}
