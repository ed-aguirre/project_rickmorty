import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  
  @Input() currentPage: number = 1;
  @Input() total: number = 826;
  @Input() limit: number = 10;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    const count = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, count);
    console.log(this.pages);
  }

  range(start:number, end:number):number[] {
    return [...Array(end).keys()].map((e) => e + start);
  }

}
