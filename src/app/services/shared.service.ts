import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data = new BehaviorSubject("");
  public searchData = this.data.asObservable();

  constructor() { }

  setData(data:any){
    this.data.next(data);
  }

  getData():any{
      return this.data;
  }
}
