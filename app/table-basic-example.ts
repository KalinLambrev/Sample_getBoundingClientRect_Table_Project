import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 21, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 22, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 23, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 24, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 25, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 26, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 27, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 28, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 29, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 30, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 31, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 32, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 33, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 34, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 35, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 36, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 37, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  sourceToDisplay = [ELEMENT_DATA[0]];
  scrollListener: any;
  currentIndex: number = 0;

  @ViewChild('tableRows') tableRows: any;
  @ViewChildren('currentRows') currentRows: QueryList<
    ElementRef<HTMLDivElement>
  >;

  constructor() {}

  ngOnInit() {
    this.scrollListener = this.onScroll.bind(this);
    document
      .getElementById('example')
      .addEventListener('scroll', this.scrollListener);
  }

  compLoaded(event: any) {
    this.leazyLoadCurrentRes(event);
  }

  leazyLoadCurrentRes(startIndex: number) {
    if (startIndex >= this.dataSource.length) {
      return;
    }

    const currentEl: ElementRef<HTMLDivElement> =
      this.currentRows.toArray()[startIndex - 1];
    const result = currentEl.nativeElement.getBoundingClientRect();

    if (result.y <= window.innerHeight + result.height) {
      this.sourceToDisplay.push(this.dataSource[startIndex]);
    }
  }

  onScroll() {
    this.leazyLoadCurrentRes(this.currentRows.length);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
