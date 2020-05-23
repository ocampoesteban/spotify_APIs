import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
// Services
import { ArtistService } from 'src/app/core/services/artist.service';

// Models
import { IRocker } from '../../core/models/iRocker';
import { Album } from 'src/app/core/models/album';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';

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
  smaller = false;
  _rocker: IRocker;
  _album: Album[];
  _artistRelated: IRocker[];
  isPageContentReady = false;
  imageURl: string;

  ngOnInit() {
    const artistId = this.activatedRoute.snapshot.params.artistId;
    this._rocker = {
      ...this._rocker,
      id: artistId
    };
    this.loadData();
  }

  checkTittleSize() {
    if (this._rocker.name.length > 13) {
      this.smaller = true;
    }
  }

  loadData() {
    forkJoin([
      this.getRocker$(),
      this.getArtistsRelated$(),
      this.getAlbum$()
    ])
    .pipe(
      map(
        (res) => {
          this._rocker = res[0];
          this._artistRelated = res[1];
          this._album = res[2];
        }
      ),
      finalize(() => this.isPageContentReady = true)
    )
    .subscribe(
      () => this.checkTittleSize(),
      error => console.error('Something went wrong ' + error)
    );
  }

  get rockerImage() {
    return `${this._rocker.images[0].url}`;
  }

  getRocker$() {
    return this.artistService
    .getArtistById(this._rocker.id);
  }

  getArtistsRelated$() {
    return this.artistService
    .getArtistRelatatedToArtistId(this._rocker.id);
  }

  getAlbum$() {
    return this.artistService
    .getAbumByArtistId(this._rocker.id);
  }
}
