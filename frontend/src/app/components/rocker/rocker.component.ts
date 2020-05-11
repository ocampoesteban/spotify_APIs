import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
// Services
import { ArtistService } from 'src/app/core/services/artist.service';

//Models
import { IRocker } from '../../core/models/iRocker';


@Component({
  selector: 'app-rocker',
  templateUrl: './rocker.component.html',
  styleUrls: ['./rocker.component.scss']
})
export class RockerComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private artistService: ArtistService
  ) { }
  _rocker: IRocker = null;

  ngOnInit() {
    const artistId = this.activatedRoute.snapshot.params.artistId;
    this._rocker = {
      ...this._rocker,
      id: artistId
    };
    this.getRocker();
  }

  set rocker(artist: IRocker) {
    this._rocker = artist;
  }

  get rocker(): IRocker {
    return this._rocker;
  }

  getRocker() {
    this.artistService
    .artistById(this.rocker.id)
    .pipe(
      map(rocker => this.rocker = rocker)
    )
    .subscribe(
      () => console.log('Good'),
      error => console.error(error)
    );
  }
}
