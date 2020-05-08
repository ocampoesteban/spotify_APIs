import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/core/models/album';

@Component({
  selector: 'multiple-items-carousel',
  templateUrl: './multiple-items-carousel.component.html',
  styleUrls: ['./multiple-items-carousel.component.scss']
})
export class MultipleItemsCarouselComponent implements OnInit {
  constructor() { }
  
  @Input() newReleases: Album[];;

  ngOnInit() { }

  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "arrows": false,
    "infinite": true,
    "responsive": [{
        "breakpoint": 426,
        "settings": { 
          "slidesToShow": 1
        }
      },
      {
        "breakpoint": 770,
        "settings": {
          "slidesToShow": 3
        }
      }
    ]
  };
}
