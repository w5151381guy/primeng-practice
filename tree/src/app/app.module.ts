import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component'
import { TreeModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CommonModule,
    FormsModule,
    TreeModule,
  ],
  declarations: [AppComponent],
  // exports: [TreeComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
