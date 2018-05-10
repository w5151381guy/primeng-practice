import { Component } from '@angular/core'

interface Source {
  brand?
  year?
  color?
}

@Component({
  selector: 'picklist',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class PickListComponent {
  sourceItems: Source[]

  targetItems: Source[]

  constructor() {
    this.sourceItems = [
      { brand: 'VW', year: 2012, color: 'Orange' },
      { brand: 'Audi', year: 2011, color: 'Black' },
      { brand: 'Renault', year: 2005, color: 'Gray' },
      { brand: 'BMW', year: 2003, color: 'Blue' },
      { brand: 'Mercedes', year: 1995, color: 'Orange' },
      { brand: 'Volvo', year: 2005, color: 'Black' },
      { brand: 'Honda', year: 2012, color: 'Yellow' },
      { brand: 'Jaguar', year: 2013, color: 'Orange' },
      { brand: 'Ford', year: 2000, color: 'Black' },
      { brand: 'Fiat', year: 2013, color: 'Red' },
    ]
  }

  ngOnInit() {
    this.targetItems = []
  }
}
