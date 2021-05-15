import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public http: HttpClient) { }

  public getTopArtists(): any {
    return this.http.get('https://api.deezer.com/chart/0/artists');
  }

  public searchArtists(searchTerm: string): any {
    return this.http.get('https://api.deezer.com/search/artist?q=' + searchTerm);
  }

  public getArtistAlbums(artistId: number): any {
    return this.http.get('https://api.deezer.com/artist/' + artistId + '/albums');
  }

  public getArtistTopSongs(artistId: number): any {
    return this.http.get('https://api.deezer.com/artist/' + artistId + '/top');
  }
}
