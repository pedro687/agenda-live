import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from '../models/live.model';
import { ResponsePageable } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  apiUrl = 'http://localhost:8080/lives';

  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  constructor(
      private httpClient: HttpClient
  ) {}

  public getLives(): Observable<ResponsePageable> {
      return this.httpClient.get<ResponsePageable>(this.apiUrl);
  }


  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    console.log('oi')
    return this.httpClient.get<ResponsePageable>(this.apiUrl + "?" + flag);
  }

  public postLives(live: any): Observable<Live> {
    return this.httpClient.post<any>(this.apiUrl, live, this.httpOptions);
  }
}
