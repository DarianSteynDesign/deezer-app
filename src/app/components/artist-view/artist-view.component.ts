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
      this.artistSearch = response;
      this.artistList = this.artistSearch;
    });
  }

}
