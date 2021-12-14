import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'row-component',
  styleUrls: ['row.component.css'],
  templateUrl: 'row.component.html',
})
export class RowComponent {
  @Input('data') data: any;
  @Output('componentLoaded') componentLoaded: EventEmitter<any> =
    new EventEmitter();

  ngOnInit() {
    // console.log(this.data, 'data');
    console.log(this.data.position, 'LOADED');
  }

  ngAfterViewInit() {
    const interval = setInterval(() => {
      this.componentLoaded.emit(this.data.position);
      clearInterval(interval);
    });
  }
}
