import { Component } from '@angular/core'

@Component({
  selector: 'pButton',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string
  handleConfirmClick() {
    this.text = `You click: 確定`
  }
  handleCancelClick() {
    this.text = `You click: 取消`
  }
}
