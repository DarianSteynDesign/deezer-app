import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchResults: Array<any> = [];
  public searchTerm: string;

  constructor(public searchService: SearchService, public sharedService: SharedService) { 
    this.searchTerm = '';
  }

  ngOnInit(): void {
    
  }

  public searchArtist() {
    this.searchService.searchArtists(this.searchTerm).subscribe((response: any) => {
      this.searchResults = response.data;
      this.sharedService.setData(this.searchResults);
    });
  }

}
