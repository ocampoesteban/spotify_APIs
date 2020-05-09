import { Component, OnInit } from '@angular/core';
// Services
import { NewReleasesService } from 'src/app/core/services/new-releases.service';

// Models
import { Album } from 'src/app/core/models/album';
import { IMultipleItemsCarousel } from 'src/app/core/models/IMultipleItemsCarousel';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private newReleasesService: NewReleasesService,
  ) { }

  newReleases: Album[];
  iMultipleItemsCarousel: IMultipleItemsCarousel = null;
  slideConfig = {
    'swipe': true,
    'swipeToSlide': true,
    'touchMove': true,
    'slidesToShow': 4,
    'slidesToScroll': 1,
    'arrows': false,
    'infinite': true,
    'responsive': [{
        'breakpoint': 426,
        'settings': {
          'slidesToShow': 1
        }
      },
      {
        'breakpoint': 770,
        'settings': {
          'slidesToShow': 3
        }
      }
    ]
  };

  ngOnInit() {
    this.getNewReleases();
  }

  initSlider() {
    this.setTitle();
    this.setSlideConfig();
  }

  setTitle() {
    this.iMultipleItemsCarousel = {
      ...this.iMultipleItemsCarousel,
      title: 'New Releases'
    };
  }

  setSlideConfig() {
    this.iMultipleItemsCarousel = {
      ...this.iMultipleItemsCarousel,
      slideConfig: this.slideConfig
    };
  }

  set setAlbum(album: Album[]) {
    this.iMultipleItemsCarousel = {
      ...this.iMultipleItemsCarousel,
      _data: album
    };
  }

  get multipleItemsCarousel() {
    return this.iMultipleItemsCarousel;
  }

  /**
   * Get New releases list
   */
  getNewReleases() {
    this.newReleasesService
    .getNewRealeases()
    .pipe(
      map((data: any) => {
        this.initSlider();
        this.setAlbum = data.albums.items;
      })
    )
    .subscribe(
      () => console.log('Looks good'),
      error => console.error(error)
    );
  }
}
