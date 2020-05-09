import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IMultipleItemsCarousel } from 'src/app/core/models/IMultipleItemsCarousel';

@Component({
  selector: 'multiple-items-carousel',
  templateUrl: './multiple-items-carousel.component.html',
  styleUrls: ['./multiple-items-carousel.component.scss']
})
export class MultipleItemsCarouselComponent implements OnInit, OnChanges {
  constructor(
  ) { }

  @Input() iMultipleItemsCarousel: IMultipleItemsCarousel;
  _iMultipleItemsCarousel: IMultipleItemsCarousel;

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.multipleItemsCarousel = this.iMultipleItemsCarousel;
  }

  set multipleItemsCarousel(p) {
    this._iMultipleItemsCarousel = p;
  }

  get multipleItemsCarousel() {
    return this._iMultipleItemsCarousel;
  }
}
