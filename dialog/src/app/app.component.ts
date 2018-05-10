import { Component } from '@angular/core'

@Component({
  selector: 'pDialog',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string
  display: boolean = false
  handleConfirmClick() {
    alert('You click: 確定')
    this.display = false
  }
  handleCancelClick() {
    alert('You click: 取消')
    this.display = false
  }
  showDialog() {
    this.display = true
  }
}
