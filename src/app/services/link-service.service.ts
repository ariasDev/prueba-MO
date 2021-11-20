import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUrlModel } from '../models/NewUrlModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkServiceService {

  private BASE_URL = "https://6053e8e145e4b3001729271d.mockapi.io/api/";

  constructor(private readonly http: HttpClient) { }

  saveNewUrl(newUrl: NewUrlModel): Observable<object> {
    return this.http.post(`${this.BASE_URL}/links`, newUrl);
  }
}
