import { Component } from '@angular/core'

interface City {
  name: string
  code: string
}

@Component({
  selector: 'dropdown',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class DropdownComponent {
  dropdownitems: City[]

  selectedDropdownitem: City

  constructor() {
    this.dropdownitems = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ]
  }
}
