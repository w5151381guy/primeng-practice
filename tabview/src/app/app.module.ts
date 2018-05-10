import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { TabviewComponent } from './app.component'
import { TabViewModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    TabViewModule,
  ],
  declarations: [TabviewComponent],
  exports: [TabviewComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [TabviewComponent],
})
export class TabViewDemoModule {}
