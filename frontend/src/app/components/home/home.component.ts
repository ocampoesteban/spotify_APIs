import { Component, OnInit } from '@angular/core';
import { NewReleasesService } from 'src/app/core/services/new-releases.service';
import { Album } from 'src/app/core/models/album';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases: Album[];

  constructor(private newReleasesService: NewReleasesService) { }

  ngOnInit() {
    this.getNewReleases();
  }

  /**
   * Get New releases list
   * @param
   * @returns
   */
  getNewReleases(){
    this.newReleasesService.getNewRealeases()
    .subscribe(
      (data:any) => {
        this.newReleases= data.albums.items
      }
    )
  }  
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
