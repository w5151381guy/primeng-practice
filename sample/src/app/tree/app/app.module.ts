import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { TreeComponent } from './app.component'
import { TreeModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    TreeModule,
  ],
  declarations: [TreeComponent],
  exports: [TreeComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [TreeComponent],
})
export class TreeDemoModule {}
