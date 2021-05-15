import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SharedService } from 'src/app/services/shared.service';
import { DatePipe } from '@angular/common';
import { ResponseModel } from 'src/app/models/artist-response.model';

@Component({
  selector: 'artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss'],
  providers: [DatePipe]
})
export class ArtistViewComponent implements OnInit {

  public artistList: Array<any> = [];
  public artistSearch: Array<any> = [];
  public artistAlbums: Array<any> = [];
  public artistTopSongs: Array<any> = [];
  
  public showSearchResults: boolean = false;
  public displayExtraInfo: boolean = false;

  public selectedArtistId: number = 0;

  constructor(
    public searchService: SearchService, 
    public sharedService: SharedService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.subscribeTopArtists();
    this.subscribeToArtistSearch();
  }

  public subscribeTopArtists(): void {
    this.searchService.getTopArtists().subscribe((response: ResponseModel) => {
      this.artistList = response.data;
    });
  }

  public subscribeToArtistSearch(): void {
    this.sharedService.searchData.subscribe((response:any) => {
      if(response){
        this.artistSearch = response;
        this.artistList = this.artistSearch;
        this.showSearchResults = true;
      }
    });
  }

  public getArtistInfo(artistId: number): void {
    window.scroll(0, 0);
    this.displayExtraInfo = true;
    this.selectedArtistId = artistId;

    this.getArtistAlbums(artistId);
    this.getArtistTopSongs(artistId);
  }

  public getArtistAlbums(artistId: number): void {
    this.searchService.getArtistAlbums(artistId).subscribe((response: ResponseModel) => {
      this.artistAlbums = response.data;
    });
  }

  public getArtistTopSongs(artistId: number): void {
    this.searchService.getArtistTopSongs(artistId).subscribe((response: ResponseModel) => {
      this.artistTopSongs = response.data;
    });
  }

  public closeArtistOverlay(): void {
    this.displayExtraInfo = !this.displayExtraInfo;
  }

}
