import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss']
})
export class ArtistViewComponent implements OnInit {

  public artistList: Array<any> = [];
  public artistSearch: Array<any> = [];
  public artistAlbums: Array<any> = [];
  public artistTopSongs: Array<any> = [];
  
  public showSearchResults: boolean = false;
  public displayExtraInfo: boolean = false;

  public selectedArtistId: number = 0;

  constructor(public searchService: SearchService, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.subscribeTopArtists();
    this.subscribeToArtistSearch();
  }

  public subscribeTopArtists(): void {
    this.searchService.getTopArtists().subscribe((response: any) => {
      this.artistList = response.data;
      console.log(this.artistList);
    });
  }

  public subscribeToArtistSearch(): void {
    this.sharedService.searchData.subscribe((response:any) => {
      if(response){
        this.artistSearch = response;
        console.log('subscribeToArtistSearch', this.artistSearch);
        this.artistList = this.artistSearch;
        this.showSearchResults = true;
      }
    });
  }

  public getArtistInfo(artistId: number): void {
    this.displayExtraInfo = true;
    this.selectedArtistId = artistId;

    this.getArtistAlbums(artistId);
    this.getArtistTopSongs(artistId);
  }

  public getArtistAlbums(artistId: number): void {
    this.searchService.getArtistAlbums(artistId).subscribe((response: any) => {
      this.artistAlbums = response.data;
      console.log('Artist albums - ', this.artistAlbums);
    });
  }

  public getArtistTopSongs(artistId: number): void {
    this.searchService.getArtistTopSongs(artistId).subscribe((response: any) => {
      this.artistTopSongs = response.data;
      console.log('Artist top songs - ', this.artistTopSongs);
    });
  }

}
