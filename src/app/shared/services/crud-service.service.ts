import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private API_URL = 'https://6531a6f94d4c2e3f333d330f.mockapi.io/api/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  public getAll<T>(route: string) {
    
    return this.http.get<T>(this.API_URL + route);
  }

  public get() {

  }
}
