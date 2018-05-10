import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { DropdownModule } from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CommonModule,
    FormsModule,
    DropdownModule,
  ],
  declarations: [AppComponent],
  // exports: [DropdownComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
