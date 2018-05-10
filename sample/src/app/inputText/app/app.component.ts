import { Component } from '@angular/core'

@Component({
  selector: 'inputText',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class InputTextComponent {
  inputText: string
  text: string
  onChange(e) {
    this.text = 'You text: ' + this.inputText
  }
}
