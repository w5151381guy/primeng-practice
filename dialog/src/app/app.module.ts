import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { ButtonModule }  from 'primeng/primeng'
import { DialogModule }  from 'primeng/primeng'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ButtonModule, DialogModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }