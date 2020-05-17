import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { IMultipleItemsCarousel } from 'src/app/core/models/iMultipleItemsCarousel';

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

  @Output() artistId = new EventEmitter<string>();

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.multipleItemsCarousel = this.iMultipleItemsCarousel;
  }

  getArtistById(artistId: string) {
    this.artistId.emit(artistId);
  }

  set multipleItemsCarousel(iMultipleItemsCarousel: IMultipleItemsCarousel) {
    this._iMultipleItemsCarousel = iMultipleItemsCarousel;
  }

  get multipleItemsCarousel(): IMultipleItemsCarousel {
    return this._iMultipleItemsCarousel;
  }
}
