import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  url: string = 'http://localhost:8080/lives';

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>(this.url + "?flag=" + flag);
  }
}
