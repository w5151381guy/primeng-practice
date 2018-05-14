import { Component } from '@angular/core'

interface Source {
  brand?
  year?
  color?
  detail?
}

@Component({
  selector: 'treeTable',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sourceItems: Source[]

  cols: any[]

  constructor() {
    this.sourceItems = [
      {
        brand: 'VW',
        year: 2012,
        color: 'Orange',
        detail: [{ brand: 'VW', year: 2012, color: 'Orange' }],
      },
      {
        brand: 'Audi',
        year: 2011,
        color: 'Black',
        detail: [{ brand: 'Audi', year: 2011, color: 'Black' }],
      },
      {
        brand: 'Renault',
        year: 2005,
        color: 'Gray',
        detail: [{ brand: 'Renault', year: 2005, color: 'Gray' }],
      },
      {
        brand: 'BMW',
        year: 2003,
        color: 'Blue',
        detail: [{ brand: 'BMW', year: 2003, color: 'Blue' }],
      },
      {
        brand: 'Mercedes',
        year: 1995,
        color: 'Orange',
        detail: [{ brand: 'Mercedes', year: 1995, color: 'Orange' }],
      },
      {
        brand: 'Volvo',
        year: 2005,
        color: 'Black',
        detail: [{ brand: 'Volvo', year: 2005, color: 'Black' }],
      },
      {
        brand: 'Honda',
        year: 2012,
        color: 'Yellow',
        detail: [{ brand: 'Honda', year: 2012, color: 'Yellow' }],
      },
      {
        brand: 'Jaguar',
        year: 2013,
        color: 'Orange',
        detail: [{ brand: 'Jaguar', year: 2013, color: 'Orange' }],
      },
      {
        brand: 'Ford',
        year: 2000,
        color: 'Black',
        detail: [{ brand: 'Ford', year: 2000, color: 'Black' }],
      },
      {
        brand: 'Fiat',
        year: 2013,
        color: 'Red',
        detail: [{ brand: 'Fiat', year: 2013, color: 'Red' }],
      },
    ]
    this.cols = [
      { field: 'brand', header: 'Brand' },
      { field: 'year', header: 'Year' },
      { field: 'color', header: 'Color' },
    ]
  }
}
